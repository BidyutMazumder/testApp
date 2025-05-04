import { Component, EventEmitter, Input, Output, output, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type  User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 
  @Input({required: true}) user!: User;
  
  @Output() select = new EventEmitter<string>();


  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser = () => {
    this.select.emit(this.user.id);
  }
}
