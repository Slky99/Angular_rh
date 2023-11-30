import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultantdetailsService {

  private baseUrl = 'http://localhost:8084/api';

constructor(private http: HttpClient)  { }

  getConsultantdetails(consultantid: number): Observable<any> {
    const url = `${this.baseUrl}/consultant/${consultantid}`; // Update the endpoint
    return this.http.get(url);
  }
}
