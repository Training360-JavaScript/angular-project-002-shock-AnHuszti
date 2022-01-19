import { Component, Input } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';
  
  constructor(
    private userService: UserService
    ) {}

  users: User[] = this.userService.list
  currentUser: User = new User();
    
  onSelectedUserClick(user: User): void {
    this.currentUser = user;
  };
  
  onUpdatedUserClick(user: User): void {
    this.userService.updateUser(user)
  };

  onDeletedUserClick(user: User): void {
   this.userService.removeUser(user)
  };

}
