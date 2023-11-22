import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProspectdetailsService {
  private baseUrl = 'http://localhost:8084/api';

constructor(private http: HttpClient)  { }

  getProspectdetails(idtiers: number): Observable<any> {
    const url = `${this.baseUrl}/prospect/${idtiers}`; // Update the endpoint
    return this.http.get(url);
  }
}
