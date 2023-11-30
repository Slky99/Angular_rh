import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private baseUrl = 'http://localhost:8084/api/prospect'; // Update with your Spring Boot backend URL
  private baseUrl2 = 'http://localhost:8084/api/mission';

  constructor(private http: HttpClient) { }

  

  getProspectChartData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/chart`);
  }
  getProspectChartData2(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/maj`);
  }

  getServicesDatda(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl2}/msdata`);
  }

  getClientDatda(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl2}/clidata`);
  }
  
}
