import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEducation } from './Ieducation';
import { Observable } from 'rxjs';
 @Injectable({
  providedIn: 'root', // auto-provided globally
})
export class EducationServiceService {

  private apiUrl = 'http://localhost:8080/educationdetail';

  constructor(private http: HttpClient) {}

  register(data:IEducation |IEducation[] ) : Observable<any>

  {
    const payload = Array.isArray(data)? data : [data] 
    return this.http.post(this.apiUrl, payload,{ responseType: 'text' });

  }


}
