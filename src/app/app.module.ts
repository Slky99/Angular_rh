import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import {MatChipsModule} from '@angular/material/chips';
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
    ProspectDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
