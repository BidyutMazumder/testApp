import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TasksComponent {
  @Input() name?: string;
}
