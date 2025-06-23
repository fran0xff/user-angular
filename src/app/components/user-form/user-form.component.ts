import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { SharingDataService } from '../../services/sharing-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-form',
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit{

  user: User;

  constructor(
    private router: Router,
    private sharingData: SharingDataService) {
      this.user = new User();
    
  }
  ngOnInit(): void {
    
  }

  onSubmit(userForm: NgForm) {
    if (userForm.valid) {
      this.sharingData.newUserEventEmitter.emit(this.user);
      console.log(this.user); 
    }
    userForm.reset();
    userForm.resetForm();
    
  }
  onClear(userForm: NgForm): void{
    this.user = new User();
    userForm.reset();
    userForm.resetForm();
  }
  
}
