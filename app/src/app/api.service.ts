import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://127.0.0.1:8080";

  constructor(private httpClient: HttpClient) {}

  createContact(contact: Contact): Observable<Contact>{
    return this.httpClient.post<Contact>(`${this.PHP_API_SERVER}/api/contact`, contact);
  }
}

