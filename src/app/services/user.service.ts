import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { id: 1,
      name: 'Francisco',
      lastname: 'Arévalo', 
      email: 'francisco@gmail.com',
      username: 'francisco',
      password: '123456' 
    },
    { id: 2,
      name: 'Juan',
      lastname: 'Perez', 
      email: 'juan@gmail.com',
      username: 'juan',
      password: '123456' 
    },
  
  ];

  constructor() { }
  findAll(): Observable<User[]> {
    return of(this.users);
  }
}
