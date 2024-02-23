import { Contact } from './contact'
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import Register from './register';

@Injectable()
export class ApiService {

  PHP_API_SERVER = "http://127.0.0.1:8000";

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any>{
    return this.httpClient.get<Register>(`${this.PHP_API_SERVER}/api/get`);
  }

  delete(id: number){
    console.log(`${this.PHP_API_SERVER}/api/delete/${id}`);
    this.httpClient.delete<number>(`${this.PHP_API_SERVER}/api/delete/${id}`).subscribe({
      next: data => {
          console.log('Sucess Delete', data);
      },
      error: error => {
          console.error('There was an error!', error);
      }
  });
  }
  update(contact: Register){
    console.log(`${this.PHP_API_SERVER}/api/update/${contact.id}`)
    this.httpClient.put(`${this.PHP_API_SERVER}/api/update/${contact.id}`, contact).subscribe({
      next: data => {
          console.log('Sucess update', data);
      },
      error: error => {
          console.error('There was an error!', error);
      }
  });;
  }
}

