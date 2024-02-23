import { Component } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registers/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { RouterModule } from '@angular/router';
import Register from './register';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TitleComponent, LoginComponent, HttpClientModule, RegisterComponent, RouterModule],
  template:
  `
    <title-component />

    <login-component class="card p-2" [updateContact]="selectedContact"></login-component>

    <registers-component (onSelected)="onSelectedProduct($event)" ></registers-component>

  `,
  providers: [ApiService]
})
export class AppComponent {
  selectedContact: Register = new Register();
  title = 'app';

  onSelectedProduct(contact: Register){
    console.log('chegou aqui também')
    this.selectedContact = contact;
  }
}
