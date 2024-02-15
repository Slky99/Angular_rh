import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultantdetailsService {

  private baseUrl = 'https://back-end-rh.onrender.com/api';

constructor(private http: HttpClient , private auth:AuthServiceService)  { }

  getConsultantdetails(consultantid: number): Observable<any> {
    const storedToken = localStorage.getItem('accessToken');
    this.auth.setAccessToken(storedToken);
      const headers = new HttpHeaders({
      Authorization: `Bearer ${this.auth.getAccessToken()}`,
    });
    const url = `${this.baseUrl}/consultant/${consultantid}`; // Update the endpoint
    return this.http.get(url,{headers});
  }
}
