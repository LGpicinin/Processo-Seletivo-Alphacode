import { Component, OnInit } from "@angular/core";
import { NgForOf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import Register from "../register";
import { ApiService } from "../api.service";
import { register } from "module";

@Component({
  selector: 'registers-component',
  imports: [NgForOf],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  registers: Register[] = [];


  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getAll()
      .subscribe((response) => {
        this.registers = response;
      }
    );
  }
}
