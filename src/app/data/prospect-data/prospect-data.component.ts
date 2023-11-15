import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-prospect-data',
  templateUrl: './prospect-data.component.html',
  styleUrl: './prospect-data.component.scss'
})
export class ProspectDataComponent {


  displayedColumns = ["idtiers", "nom","adresse","cin","profession" ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource <any>;

  constructor(private http: HttpClient){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
    this.getAllprospect();
  }

  ProspectArray : any[] = [];
  getAllprospect(){

    this.http.get("http://localhost:8084/api/prospect/prospect")
    .subscribe((resudata:any) => 
    {
    console.log(resudata);
    this.ProspectArray = resudata ;
    this.dataSource = new MatTableDataSource(resudata);
    this.dataSource.paginator = this.paginator;
    });
    }
}
