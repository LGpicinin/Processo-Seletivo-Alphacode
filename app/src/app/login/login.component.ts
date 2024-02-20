import { Component, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NgForm }   from '@angular/forms';


@Injectable()
@Component({
  selector: 'login-component',
  standalone: true,
  templateUrl: './login.component.html',
})

export class LoginComponent{
  loginName: string = '';
  email: string = '';
  date: string = '';
  profission: string =  '';
  telephone: string = '';
  phone: string = '';

  constructor(private http: HttpClient){}

  setValues(name: string, dateBirth: string, email: string, profission: string, telephone: string, cell_phone: string){
    var contact = [{
      name:name,
      dateBirth: dateBirth,
      email: email,
      profission: profission,
      telephone: telephone,
      cell_phone: cell_phone
    }

    ]
    console.log(JSON.stringify(contact));
    this.http.post('http://127.0.0.1:8000/api/contacts/store', JSON.stringify(contact));
  }
}
