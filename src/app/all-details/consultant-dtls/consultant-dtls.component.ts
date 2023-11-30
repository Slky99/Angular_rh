import { Component, ViewChild } from '@angular/core';
import { ConsultantdetailsService } from '../../details-service/consultantdetails.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ConsultantMissionComponent } from '../../dialog/consultant-mission/consultant-mission.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-consultant-dtls',
  templateUrl: './consultant-dtls.component.html',
  styleUrl: './consultant-dtls.component.scss',
})
export class ConsultantDtlsComponent {
  consultant: any;
  isSecondButton = true;   
  mission!: any;
  constructor(
    private route: ActivatedRoute,
    private cons: ConsultantdetailsService,
    private _dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    const ConsIdparam = this.route.snapshot.paramMap.get('id');
    if (ConsIdparam === null || ConsIdparam === undefined) {
      return console.log('error');
    }
    const consultantId = +ConsIdparam;

    this.cons.getConsultantdetails(consultantId).subscribe((data) => {
      if (data) {
        this.consultant = data;
      } else {
        console.error('Consultant data is undefined');
      }
    });
  }
  openDialog(consultant: any) {
    const dialogRef = this._dialog.open(ConsultantMissionComponent, {
      width: '900px',
      data: { parent: this, consultant },
    });

    dialogRef.afterClosed().subscribe((consultantID: number) => {
      console.log('Dialog closed with result:', consultantID);
      if(consultantID !== undefined && consultantID !== null){
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/consultant', consultantID]);
      });}
      else{console.log('Dialog closed without consultantId')}
    });
  }
}
