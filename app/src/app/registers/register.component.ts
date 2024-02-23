import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForOf } from "@angular/common";
import Register from "../register";
import { ApiService } from "../api.service";
import {MatTableModule} from '@angular/material/table';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'registers-component',
  imports: [NgForOf, MatTableModule],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  @Output() onSelected = new EventEmitter<Register>();
  registers: Register[] = [];
  displayedColumns: string[] = ['name', 'date', 'email', 'phone', 'actions'];


  constructor(private apiService: ApiService, private router:Router){}


  destroy(id: number){
    if(window.confirm('Deseja deletar o contato?') == true){
      console.log(id);
      this.apiService.delete(id);
    }

  }

  goToUpdatePage(contact: Register){
    console.log(contact)
    this.router.navigate(['/', 'update'], { state: { contact } })
  }

  onSelectedContact(contact: Register){
    console.log(contact)
    this.onSelected.emit(contact);
  }

  ngOnInit(): void {
    this.apiService.getAll()
      .subscribe((response) => {
        this.registers = response;
      }
    );
  }
}
