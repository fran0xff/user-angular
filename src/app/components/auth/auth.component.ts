import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import Swal from 'sweetalert2';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'auth',
  imports: [FormsModule],
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  user: User;

  constructor(private sharingData: SharingDataService) {
    this.user = new User();
  }
  onSubmit() {
    if(!this.user.username || !this.user.password) {
      Swal.fire({
        title: 'Error de validación',
        text: 'Username y password requeridos.',
        icon: 'error'
      });
    } else {
      this.sharingData.handlerLoginEventEmitter.emit({
        username: this.user.username, password: this.user.password});
      Swal.fire({
        title: 'Título',
        text: 'Bienvenido',
        icon: 'success'
      });
    }

  }

}
