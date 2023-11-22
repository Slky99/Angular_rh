import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-prospect-dialog-add',
  templateUrl: './prospect-dialog-add.component.html',
  styleUrl: './prospect-dialog-add.component.scss',
})
export class ProspectDialogAddComponent {
  constructor(private http: HttpClient,
     private snackBar: MatSnackBar, private dialogRef: MatDialogRef<ProspectDialogAddComponent>) {}
  prospect: any;
  nom: string = '';
  adresse : string ='' ;
  disponibilite : string ='' ;
  formation : string ='' ;
  secteuractivite : string ='';
  langue : string ='';
  
  currentID = '';
  data: any;

  ngOnInit() {
    console.log('Prospect data:', this.data);
  }

  register() {
    let bodyData = {
      /* "dateNaissance" : this.dateNaissance,
      "disponibilite" : this.disponibilite,
      "formation" : this.formation,
      "secteuractivite" : this.secteuractivite,
      "langue" : this.langue,
      "cin" : this.cin,
      "majcv" : this.majcv,
      "paysresidence" : this.paysresidence,
      "anneeexperience" : this.anneeexperience,
      "telephone" : this.telephone,
      "profession" : this.profession,
      "motcle" : this.motcle,
      "email" : this.email,
     
      "sexe" : this.sexe,
      "competencemetier" : this.competencemetier,
      "niveauacademique" : this.niveauacademique,
      "competencetechnique" : this.competencetechnique,
      "experienceprofessionnelle" : this.experienceprofessionnelle 
      */
      "nom": this.nom,
      "disponibilite" : this.disponibilite,
      "formation" : this.formation,
      "secteuractivite" : this.secteuractivite,
    };

    this.http
      .post('http://localhost:8084/api/prospect/add', bodyData, {
        responseType: 'text',
      })
      .subscribe((resultData: any) => {
        console.log(resultData);
        this.snackBar.open('Prospect updated successfully', 'Close', {
          duration: 3000,
        });
        this.dialogRef.close(bodyData);
      });
  }

  save() {
    if (this.currentID == '' || this.nom =='') {
      this.register();
    } else {
      console.log('Erreur insertion');
    }
  }
}
