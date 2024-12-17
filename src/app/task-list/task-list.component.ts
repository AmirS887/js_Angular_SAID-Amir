import { Component, OnInit} from '@angular/core';
import { NgFor } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  imports: [NgFor,FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTask: string = '';

constructor(private taskService: TaskService){}
  
ngOnInit(): void{
  this.tasks = this.taskService.getTasks();
}
  //Ajout d'une tache
  addTask() {
    this.taskService.addTask(this.newTask);
    this.newTask = '';
    this.refreshTasks();
  }

  //Suppression d'une tache
  removeTask(index: number){
    this.tasks.splice(index, 1)
  }

  //Inversion de l'état d'une tache
  toggleTaskState(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed; // Inverse l'état
  }
  
  //Mettre a jour la liste local
  refreshTasks(){
    this.tasks = this.taskService.getTasks();
  }

}
