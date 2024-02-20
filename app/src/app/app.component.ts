import { Component } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from  '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TitleComponent, LoginComponent, HttpClientModule, FormsModule],
  template:
  `
    <title-component />

    <login-component />
  `,
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'app';
}
