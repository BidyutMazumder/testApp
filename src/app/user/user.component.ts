import { Component, EventEmitter, Input, Output, output, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 
  @Input({required: true}) id!: string;
  @Input({required: true}) avater!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter();
  // id = input.required<string>();
  // avater = input.required<string>();
  // name = input.required<string>();
  //select = output<string>();
  


  get imagePath() {
    return 'assets/users/' + this.avater;
  }
  onSelectUser = () => {
    this.select.emit(this.id);
  }
}
