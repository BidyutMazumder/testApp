import { Component, Input, EventEmitter, Output, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task, type NewTaskData } from './task.model';
import { TasksServices } from '../tasks.services';


@Component({
	selector: 'app-task',
	standalone: true,
	imports: [DatePipe],
	templateUrl: './task.component.html',
	styleUrl: './task.component.css'
})

export class TaskComponent {
	@Input({ required: true }) task!: Task;
	private tasksService = inject(TasksServices);
	onCompleteTask() {
		this.tasksService.removeTask(this.task.id);
	}
}
