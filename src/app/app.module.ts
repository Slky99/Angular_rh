import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { NgChartsModule } from 'ng2-charts';
import { DashTableComponent } from './dash-table/dash-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { MyChartComponent } from './my-chart/my-chart.component';
import { MyChart2Component } from './my-chart2/my-chart2.component';
import { MyChart3Component } from './my-chart3/my-chart3.component';
import { MyChart4Component } from './my-chart4/my-chart4.component';
import { ProspectComponent } from './model/prospect/prospect.component';
import { ConsultantComponent } from './model/consultant/consultant.component';
import { ClientComponent } from './model/client/client.component';
import { MissionComponent } from './model/mission/mission.component';
import { ProspectDataComponent } from './data/prospect-data/prospect-data.component';
import { ProspectDtlsComponent } from './all-details/prospect-dtls/prospect-dtls.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ProspectDialogComponent } from './dialog/prospect-dialog/prospect-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { ProspectDialogAddComponent } from './add-dialog/prospect-dialog-add/prospect-dialog-add.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthServiceService } from './Auth/auth-service.service';
import { authGuardFactory } from './Auth/auth.guard';
import { ConsultantDataComponent } from './data/consultant-data/consultant-data.component';
import { ConsultantDtlsComponent } from './all-details/consultant-dtls/consultant-dtls.component';
import { MissionDataComponent } from './data/mission-data/mission-data.component';
import { ConsultantMissionComponent } from './dialog/consultant-mission/consultant-mission.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    CardComponent,

    DashTableComponent,
    MiniCardComponent,
    MyChartComponent,
    MyChart2Component,
    MyChart3Component,
    MyChart4Component,
    ProspectComponent,
    ConsultantComponent,
    ClientComponent,
    MissionComponent,
    ProspectDataComponent,
    ProspectDtlsComponent,
    ProspectDialogComponent,
    ProspectDialogAddComponent,
    LoginPageComponent,
    ConsultantDataComponent,
    ConsultantDtlsComponent,
    MissionDataComponent,
    ConsultantMissionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatChipsModule,
    MatSortModule,
  ],
  providers: [{
    provide: 'CanActivateTeam',
    useFactory: authGuardFactory,
    deps: [AuthServiceService],
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
