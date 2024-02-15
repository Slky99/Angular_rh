import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthServiceService } from '../../Auth/auth-service.service';

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
  constructor(private http: HttpClient , private auth:AuthServiceService){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
    this.getAllClient();
  }

  getAllClient (){
    const storedToken = localStorage.getItem('accessToken');
    this.auth.setAccessToken(storedToken);
      const headers = new HttpHeaders({
      Authorization: `Bearer ${this.auth.getAccessToken()}`,
    });
      this.http
      .get('https://back-end-rh.onrender.com/api/client/show',{headers})
      .subscribe((resudata : any)=>{
        console.log(resudata);
        this.ClientArray = resudata ;
        this.dataSource = new MatTableDataSource(resudata);
        this.dataSource.paginator = this.paginator;
      })
  }

}
