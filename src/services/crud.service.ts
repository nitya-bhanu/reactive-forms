import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  api_url = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  headers = new HttpHeaders().set('ApiVersion', '1')

  getBookDetails(): Observable<any> {
    return this.http.get(`${this.api_url}/booksDetail`, {
      headers: this.headers
    })
  }

}
