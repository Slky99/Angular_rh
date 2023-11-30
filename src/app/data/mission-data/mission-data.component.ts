import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mission-data',
  templateUrl: './mission-data.component.html',
  styleUrl: './mission-data.component.scss',
})
export class MissionDataComponent {
  displayedColumns = [
    'missionid',
    'mission_ref',
    'designation',
    'consultant',
    /*'lieuimput',*/
    /*'entite',*/
    'client',
    /*'nombrej'*/
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('filterInput') filterInput!: MatInput;
  dataSource = new MatTableDataSource<any>();

  filter = new FormControl('');
  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() : void {this.getAllmission();
    this.filter.valueChanges.subscribe(filterValue => {
      filterValue = (filterValue ?? '').trim(); // Remove whitespace
      this.dataSource.filter = filterValue.toLowerCase();
    });}

  applyFilter(filterValue: string) {
    if (this.dataSource) { // Check if this.dataSource is defined
       filterValue = filterValue.trim().toLowerCase();
       this.dataSource.filter = filterValue;
   }
 }



  MissionArray: any[] = [];
  getAllmission() {
    this.http
      .get('http://localhost:8084/api/mission/mission')
      .subscribe((resudata: any) => {
        console.log(resudata);
        this.MissionArray = resudata;
        this.dataSource = new MatTableDataSource(resudata);
        this.dataSource.paginator = this.paginator;
      });
  }
}
