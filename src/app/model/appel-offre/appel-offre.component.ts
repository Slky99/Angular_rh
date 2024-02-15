import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-appel-offre',
  templateUrl: './appel-offre.component.html',
  styleUrl: './appel-offre.component.scss'
})
export class AppelOffreComponent {
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router:Router
   
  )
{}


missions: string = '';
client = 1;
D_administratif!: boolean;
D_financier  : boolean =false;
Cv_formater!: boolean;
consultation: string = '';
limite_soumission!: Date;
Consultant: string = '';
consultation_date!: Date;
date_solicit!: Date;
canal_solicit: string = '';
soumission!: boolean;
soumi_desc: string = '';
TJM = 0 ;
Disponibilite: string = '';
rl_client: string = '';
rl_aft_client: string = '';
Entretien !: Date ;
appl_entretien: string = '';
alrt_entretien: string = '';
rl_aft_entretien: string = '';
sort_entretien: string = '';
notif_condidat: string = '';
cl_interlocu: string = '';

currentID = '';
data: any;
ngOnInit() {
  console.log('Appel d Offres data:', this.data);
}
register() {
  let bodyData = {
    missions :this.missions ,
    clients :this.client ,
    d_administratif :this.D_administratif ,
    d_financier:this.D_financier ,
    cv_formater: this.Cv_formater,
    consultation: this.consultation,
    limite_soumission: this.limite_soumission,
    consultant: this.Consultant,
    consultation_date: this.consultation_date,
    date_solicit: this.date_solicit,
    canal_solicit: this.canal_solicit,
    soumission: this.soumission,
    soumi_desc: this.soumi_desc,
    tjm: this.TJM,
    disponibilité: this.Disponibilite,
    rl_client: this.rl_client,
    rl_aft_client: this.rl_aft_client,
    entretien: this.Entretien,
    appl_entretien: this.appl_entretien,
    alrt_entretien: this.alrt_entretien,
    rl_aft_entretien: this.rl_aft_entretien,
    sort_entretien: this.sort_entretien,
    notif_condidat: this.notif_condidat,
    cl_interlocu: this.cl_interlocu,
  };

  this.http
    .post('https://back-end-rh.onrender.com/api/offres/add', bodyData, {
      responseType: 'text',
    })
    .subscribe((resultData: any) => {
      console.log(resultData);
      this.snackBar.open('Appel d Offres updated successfully', 'Close', {
        duration: 3000,
      });
      //this.dialogRef.close(bodyData);
    });
}

save() {
  if (this.currentID == '' ) {
    this.register();
 
  } else {
    console.log('Erreur insertion');
  }
}

// Show($myParam: string = ''): void {
//   const navigationDetails: string[] = ['/appe'];
//   if($myParam.length) {
//     navigationDetails.push($myParam);
//   }
//   this.router.navigate(navigationDetails);
// }


  private breakpointObserver = inject(BreakpointObserver);
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,

          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,

        table: { cols: 4, rows: 4 },
      };
    })
  );

}
