import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs';
import { ProspectDialogAddComponent } from '../../add-dialog/prospect-dialog-add/prospect-dialog-add.component';
import { ProspectDataComponent } from '../../data/prospect-data/prospect-data.component';
import { Router } from '@angular/router';
=======
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
>>>>>>> f1c199fb000fc4c4eecf682d9923dd886b4283f1

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',
<<<<<<< HEAD
  styleUrl: './prospect.component.scss',
})
export class ProspectComponent {
  constructor(private http: HttpClient, private _dialog: MatDialog, private router: Router)  {}

  @ViewChild(ProspectDataComponent) matTableComponent!: ProspectDataComponent;

  private breakpointObserver = inject(BreakpointObserver);
=======
  styleUrl: './prospect.component.scss'
})
export class ProspectComponent {

  private breakpointObserver = inject(BreakpointObserver);
 

  
>>>>>>> f1c199fb000fc4c4eecf682d9923dd886b4283f1
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
<<<<<<< HEAD

          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,

        table: { cols: 4, rows: 4 },
      };
    })
  );

  openDialog() {
    const dialogRef = this._dialog.open(ProspectDialogAddComponent, {
      width: '900px',  
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle
      console.log('Dialog closed with result:', result);
     /* this.matTableComponent.notifyRefresh();*/
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(["/pros"]);
      });
      
    });
  }
=======
         
          table: { cols: 1, rows: 4 }
        };
      }
 
     return {
        columns: 4,
        
        table: { cols: 4, rows: 4 }
      };
    })
  );
>>>>>>> f1c199fb000fc4c4eecf682d9923dd886b4283f1
}
