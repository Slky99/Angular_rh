import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-client-data',
  templateUrl: './client-data.component.html',
  styleUrl: './client-data.component.scss'
})
export class ClientDataComponent {
  displayedColumns = [
    'idclient',
    'nom',
    'ice',
    'adresse'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<any>();


  client : any   ;
  ClientArray : any []= [] ;
  constructor(private http: HttpClient){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
    this.getAllClient();
  }

  getAllClient (){
      this.http
      .get('http://localhost:8084/api/client/show')
      .subscribe((resudata : any)=>{
        console.log(resudata);
        this.ClientArray = resudata ;
        this.dataSource = new MatTableDataSource(resudata);
        this.dataSource.paginator = this.paginator;
      })
  }

}
