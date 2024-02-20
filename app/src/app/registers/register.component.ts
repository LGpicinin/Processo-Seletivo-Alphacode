import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Register from "../register";
import { register } from "module";

@Component({
  selector: 'registers',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit{
  registers: Register[] = [];


  constructor(private http: HttpClient){}

  ngOnInit(): void {
    var registers = this.http.get('http://127.0.0.1:8000/api/contacts');
  }
}
