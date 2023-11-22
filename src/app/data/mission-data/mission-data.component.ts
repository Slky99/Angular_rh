import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
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
    'mission_ref',
    'designation',
    'lieuimput',
    'entite',
    'nombrej',
    'action',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<any>();

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.getAllmission();
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
