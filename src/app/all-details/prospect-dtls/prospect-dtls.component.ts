import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProspectdetailsService } from '../../details-service/prospectdetails.service';
import { MatDialog } from '@angular/material/dialog';
import { ProspectDialogComponent } from '../../dialog/prospect-dialog/prospect-dialog.component';

@Component({
  selector: 'app-prospect-dtls',
  templateUrl: './prospect-dtls.component.html',
  styleUrl: './prospect-dtls.component.scss'
})
export class ProspectDtlsComponent {

  prospect : any;
  constructor( private route: ActivatedRoute,
    private prs : ProspectdetailsService ,
   
    public dialog: MatDialog){}

    ngOnInit(){
      const ProsIdparam = this.route.snapshot.paramMap.get('id');
      if(ProsIdparam === null || ProsIdparam === undefined){
          return console.log("error");
      }
        const prospectId= +ProsIdparam;

        this.prs.getProspectdetails(prospectId).subscribe((data) => {
          if (data) {
            this.prospect = data;
          } else {
            console.error('Prospect data is undefined');
          }
        });
    }

    @Input() value: any;

    updateData(updatedData: any): void {
      // Update the parent component's data
      this.prospect = updatedData;
    } 

    OpenEditDialog(): void {
      const dialogRef = this.dialog.open(ProspectDialogComponent, {
        width: '900px',  
        data: { parent: this,  prospect: this.prospect }  
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Update the value after dialog is closed
          this.prospect = result;
        }
      });
    }

    
}

