import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DashTableComponent } from './dash-table/dash-table.component';
import { ConsultantComponent } from './model/consultant/consultant.component';
import { ProspectComponent } from './model/prospect/prospect.component';
<<<<<<< HEAD
import { ProspectDtlsComponent } from './all-details/prospect-dtls/prospect-dtls.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthServiceService } from './Auth/auth-service.service';
import { AuthGuard } from './Auth/AuthGuard.guard';
import { ConsultantDtlsComponent } from './all-details/consultant-dtls/consultant-dtls.component';
import { MissionComponent } from './model/mission/mission.component';
import { ClientComponent } from './model/client/client.component';

export const authGuard = 'CanActivateTeam';
const routes: Routes = [
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
  { path: 'dash', component: DashComponent },
  { path: 'tab', component: DashTableComponent },
  { path: 'dashtab', component: DashTableComponent },
  { path: 'cons', component: ConsultantComponent },
  { path: 'pros', component: ProspectComponent },
  { path: 'prospect/:id', component: ProspectDtlsComponent },
  { path: 'consultant/:id', component: ConsultantDtlsComponent },
 {  path: 'mission', component:MissionComponent },
 {  path: 'client', component: ClientComponent },
  { path: 'login', component: LoginPageComponent },
=======

const routes: Routes = [
  {path : 'dash' , component : DashComponent},
  {path : 'tab' , component : DashTableComponent},
  {path : 'dashtab' , component : DashTableComponent}
,  {path : 'cons' , component : ConsultantComponent} ,
  {path : 'pros' , component : ProspectComponent}



>>>>>>> f1c199fb000fc4c4eecf682d9923dd886b4283f1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
<<<<<<< HEAD
  exports: [RouterModule],
})
export class AppRoutingModule {}
=======
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> f1c199fb000fc4c4eecf682d9923dd886b4283f1
