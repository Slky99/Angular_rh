import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',
  styleUrl: './prospect.component.scss'
})
export class ProspectComponent {

  private breakpointObserver = inject(BreakpointObserver);
 

  
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
         
          table: { cols: 1, rows: 4 }
        };
      }
 
     return {
        columns: 4,
        
        table: { cols: 4, rows: 4 }
      };
    })
  );
}
