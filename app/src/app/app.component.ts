import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleComponent, LoginComponent],
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
