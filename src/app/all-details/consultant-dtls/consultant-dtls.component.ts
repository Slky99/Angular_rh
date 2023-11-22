import { Component, ViewChild } from '@angular/core';
import { ConsultantdetailsService } from '../../details-service/consultantdetails.service';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultant-dtls',
  templateUrl: './consultant-dtls.component.html',
  styleUrl: './consultant-dtls.component.scss'
})
export class ConsultantDtlsComponent {
  consultant : any;
  constructor( private route: ActivatedRoute,
    private cons : ConsultantdetailsService  ){}

     
     

    ngOnInit(){
      const ConsIdparam = this.route.snapshot.paramMap.get('id');
      if(ConsIdparam === null || ConsIdparam === undefined){
          return console.log("error");
      }
        const consultantId= +ConsIdparam;

        this.cons.getConsultantdetails(consultantId).subscribe((data) => {
          if (data) {
            this.consultant = data;
          } else {
            console.error('Consultant data is undefined');
          }
        });

       
    }


   
}
