import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksServices } from './tasks.services';
import { type NewTaskData } from './task/task.model';

@Component({
	selector: 'app-tasks',
	standalone: true,
	imports: [TaskComponent, NewTaskComponent],
	templateUrl: './tasks.component.html',
	styleUrl: './tasks.component.css'
})
export class TasksComponent {
	@Input({ required: true }) userId!: string;
	@Input({ required: true }) name?: string;
	isAddingTask = false;


	constructor(private tasksServices: TasksServices) { }


	//task = selectedUserTasks();
	get selectedUserTasks() {
		return this.tasksServices.getUserTAsks(this.userId);
	}

	onCompleteTask(taskId: string) {
		this.tasksServices.removeTask(taskId);
	}

	onStartAddTask() {
		this.isAddingTask = true;
	}
	onCloseAddTask() {
		this.isAddingTask = false;
	}
}
