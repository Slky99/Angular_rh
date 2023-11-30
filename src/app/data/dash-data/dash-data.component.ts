import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dash-data',
  templateUrl: './dash-data.component.html',
  styleUrl: './dash-data.component.scss'
})
export class DashDataComponent {
  displayedColumns = [
     'nom',
    'tjm',
    'client',
    'count'
  ];

  constructor(  private http: HttpClient){
  
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<any>();

  data : any ;

  ngOnInit (){
    this.getdata();
  }


  getdata(){
    this.http.get('http://localhost:8084/api/mission/dstab')
    .subscribe((resudata : any )=>{
      console.log(resudata);
      this.dataSource = new MatTableDataSource(resudata);
      this.dataSource.paginator = this.paginator;
    })

  }


}
