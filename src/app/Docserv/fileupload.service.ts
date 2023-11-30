import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  private apiUrl = 'http://localhost:8084/api/files'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  uploadFile(file: File, prospectId: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(`${this.apiUrl}/savefile/${prospectId}`, formData);
  }





}
