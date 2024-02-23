import { Component, Injectable, Input } from "@angular/core";
import { ApiService } from "../api.service";
import Register from "../register";
import { FormsModule } from  '@angular/forms';

@Injectable()
@Component({
  selector: 'login-component',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule]
})

export class LoginComponent{
  @Input() updateContact: Register = new Register();

  constructor(private apiService: ApiService){}

  updaterContact(value: any){
    if(value.cell_phone !=''){ this.updateContact.cell_phone = value.cell_phone};
    if(value.name !='') this.updateContact.name = value.name;
    if(value.email !='') this.updateContact.email = value.email;
    if(value.telephone !='') this.updateContact.telephone = value.telephone;
    if(value.profission !='') this.updateContact.profission = value.profission;
    if(value.dateBirth !='') this.updateContact.dateBirth = value.dateBirth;

    this.apiService.update(this.updateContact);

    this.updateContact.cell_phone = '';
    this.updateContact.name = '';
    this.updateContact.email = '';
    this.updateContact.telephone = '';
    this.updateContact.profission = '';
    this.updateContact.dateBirth = '';
    this.updateContact.id = 0;
  }
 }
