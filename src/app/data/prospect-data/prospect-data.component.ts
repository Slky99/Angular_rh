import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ConsultantDataComponent } from '../consultant-data/consultant-data.component';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatInput } from '@angular/material/input';
import { FormControl } from '@angular/forms';
import { FileuploadService } from '../../Docserv/fileupload.service';

@Component({
  selector: 'app-prospect-data',
  templateUrl: './prospect-data.component.html',
  styleUrl: './prospect-data.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProspectDataComponent {
  @Output() dataUpdated: EventEmitter<void> = new EventEmitter<void>();
  private subscription: Subscription | undefined;
 

  displayedColumns = [
    'idtiers',
    'nom',
    'adresse',
    'cin',
    'profession',
    'action',
    'cs',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('filterInput') filterInput!: MatInput;
  dataSource = new MatTableDataSource<any>();

  filter = new FormControl('');
  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.getAllprospect();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getAllprospect();
    // Subscribe to changes in the filter control and apply filtering
    this.filter.valueChanges.subscribe((filterValue) => {
      filterValue = (filterValue ?? '').trim(); // Remove whitespace
      this.dataSource.filter = filterValue.toLowerCase();
    });
  }

  applyFilter(filterValue: string) {
    if (this.dataSource || this.ProspectArray) {
      // Check if this.dataSource is defined
      filterValue = filterValue.trim().toLowerCase();
      this.dataSource.filter = filterValue;
      this.ProspectArray.filter;
    }
  }

  ProspectArray: any[] = [];
  getAllprospect() {
    this.http
      .get('http://localhost:8084/api/prospect/prospect')
      .subscribe((resudata: any) => {
        console.log(resudata);
        this.ProspectArray = resudata;
        this.dataSource = new MatTableDataSource(resudata);
        this.dataSource.paginator = this.paginator;
      });
  }

  setDelete(data: any) {
    this.http
      .delete(
        'http://localhost:8084/api/prospect/delete' + '/' + data.idtiers,
        { responseType: 'text' }
      )
      .subscribe((resultData: any) => {
        console.log(resultData);
        this.snackBar.open('Prospect supprimer', 'Fermer', {
          duration: 3000,
        });
        this.getAllprospect();
      });
  }

  convertToConsultant(idtiers: number): void {
    const url = `http://localhost:8084/api/prospect/convert/${idtiers}`;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.http
      .post<ConsultantDataComponent>(url, {})
      .subscribe({
        next: (consultant: ConsultantDataComponent) => {
          console.log('Converted to consultant:', consultant);
          const consultantId = consultant.consultantid;
          this.router.navigate(['/consultant', consultantId]);
        },
        error: (error) => {
          // Handle errors
          console.error('Error converting to consultant:', error);
        },
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }




}
