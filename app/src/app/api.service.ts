import { Contact } from './contact'
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable()
export class ApiService {

  PHP_API_SERVER = "http://127.0.0.1:8000";

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any>{
    return this.httpClient.get<Contact>(`${this.PHP_API_SERVER}/api/get`);
  }
}

