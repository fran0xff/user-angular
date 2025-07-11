import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { SharingDataService } from '../../services/sharing-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-form',
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit{

  user: User;
  errors: any = {};

  constructor(
    private route: ActivatedRoute,
    private sharingData: SharingDataService,
    private service: UserService) {
      this.user = new User();
    
  }
  ngOnInit(): void {

    this.sharingData.errorUserFormEventEmitter.subscribe(errors => this.errors = errors); // Otra alternativa para recibir los errores del formulario
    this.sharingData.selectUserEventEmitter.subscribe(user => this.user = user); // Otra alternativa para recibir el usuario seleccionado

    this.route.paramMap.subscribe(params => {
      const id: number = +(params.get('id') || '0');

      if (id > 0) {
        this.sharingData.findUserByIdEventEmitter.emit(id); // Otra alternativa para recibir el usuario seleccionado
        // this.service.findById(id).subscribe(user => this.user = user);
      }
    });
  }

  onSubmit(userForm: NgForm) {
    //if (userForm.valid) {
      this.sharingData.newUserEventEmitter.emit(this.user);
      console.log(this.user); 
    //}
    // userForm.reset();
    // userForm.resetForm();
    
  }
  onClear(userForm: NgForm): void{
    this.user = new User();
    userForm.reset();
    userForm.resetForm();
  }
  
}
