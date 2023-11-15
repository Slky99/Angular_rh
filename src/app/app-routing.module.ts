import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DashTableComponent } from './dash-table/dash-table.component';
import { ConsultantComponent } from './model/consultant/consultant.component';
import { ProspectComponent } from './model/prospect/prospect.component';

const routes: Routes = [
  {path : 'dash' , component : DashComponent},
  {path : 'tab' , component : DashTableComponent},
  {path : 'dashtab' , component : DashTableComponent}
,  {path : 'cons' , component : ConsultantComponent} ,
  {path : 'pros' , component : ProspectComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
