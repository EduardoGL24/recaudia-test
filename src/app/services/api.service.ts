import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string = 'https://test-api-nebula.recaudia.com';

  constructor(private http: HttpClient) { }

  getUsers(conditions: object){
    let headers = new HttpHeaders().set('Authorization', 'Bearer TjUVdA1QOATIwiZ7Cp');
    return this.http.post(`${this.baseURL}/person/search`, conditions, {headers: headers});
  }
}
