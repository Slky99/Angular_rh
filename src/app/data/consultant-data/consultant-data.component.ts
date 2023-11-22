import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConsultantMissionComponent } from '../../dialog/consultant-mission/consultant-mission.component';
import { ActivatedRoute } from '@angular/router';
import { ConsultantdetailsService } from '../../details-service/consultantdetails.service';

@Component({
  selector: 'app-consultant-data',
  templateUrl: './consultant-data.component.html',
  styleUrl: './consultant-data.component.scss',
})
export class ConsultantDataComponent {
  displayedColumns = [
    'idtiers',
    'nom',
    'adresse',
    'cin',
    'profession',
    'ses',
    'ss',
    'action',
    'mis'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<any>();

  constructor(
    private http: HttpClient,
    private _dialog: MatDialog,
    private route: ActivatedRoute,
    private cons: ConsultantdetailsService
  ) {}

  consultantid: number = 0;
  consultant: any;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.getAllconsultant();

     
  }

  ConsultantArray: any[] = [];
  getAllconsultant() {
    this.http
      .get('http://localhost:8084/api/consultant/consultant')
      .subscribe((resudata: any) => {
        console.log(resudata);
        this.ConsultantArray = resudata;
        this.dataSource = new MatTableDataSource(resudata);
        this.dataSource.paginator = this.paginator;
         
      });
  }
 

  openDialog(consultant : any) {
    const dialogRef = this._dialog.open(ConsultantMissionComponent, {
      width: '900px',
      data: { parent: this, consultant   },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
    });
  }
}
