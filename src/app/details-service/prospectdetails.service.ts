import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProspectdetailsService {
  private baseUrl = 'https://back-end-rh.onrender.com/api';

constructor(private http: HttpClient ,  private auth:AuthServiceService)  { }

  getProspectdetails(idtiers: number): Observable<any> {
    const storedToken = localStorage.getItem('accessToken');
    this.auth.setAccessToken(storedToken);
      const headers = new HttpHeaders({
      Authorization: `Bearer ${this.auth.getAccessToken()}`,
    });
    const url = `${this.baseUrl}/prospect/${idtiers}`; // Update the endpoint
    return this.http.get(url,{headers});
  }
}
