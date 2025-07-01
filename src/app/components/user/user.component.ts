import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'user',
  imports: [RouterModule],
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit{

   title: string = 'Listado de usuarios';

  users: User[] = [];

  constructor(
    private service: UserService,
    private sharingData: SharingDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
      if(this.router.getCurrentNavigation()?.extras.state) {
        this.users = this.router.getCurrentNavigation()?.extras.state!['users'];
      }
    }

  ngOnInit(): void {
    if (this.users.length == 0 || this.users == undefined || this.users == null) {
      //this.service.findAll().subscribe(users => this.users = users);
      this.route.paramMap.subscribe(params => {
        const page = +(params.get('page') || '0');
        this.service.findAllPageable(page).subscribe(pageable => this.users = pageable.content as User[]);
      });
    }
  }
  
  onRemoveUser(id: number): void {
      this.sharingData.idUserEventEmitter.emit(id);
  } 

  onSelectUser(user: User): void {
    this.router.navigate(['/users/edit', user.id]);
  }

}
