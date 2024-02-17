import { Component } from "@angular/core";


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

  setValues(loginName: string, date: string, email: string, profission: string, telephone: string, phone: string){
    this.loginName = loginName;
    this.date = date;
    this.email = email;
    this.profission = profission;
    this.telephone = telephone;
    this.phone = phone;
  }
}
