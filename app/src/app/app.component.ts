import { Component } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registers/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from  '@angular/forms';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TitleComponent, LoginComponent, HttpClientModule, FormsModule, RegisterComponent],
  template:
  `
    <title-component />

    <login-component />

    <registers-component />

  `,
  styleUrl: './app.component.sass',
  providers: [ApiService]
})
export class AppComponent {
  title = 'app';
}
