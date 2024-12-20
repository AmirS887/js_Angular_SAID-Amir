import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTask: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks(); // Charger les tâches depuis le service
  }

  addTask(): void {
    if (this.newTask.trim()) {
      this.taskService.addTask({ name: this.newTask, completed: false });
      this.tasks = this.taskService.getTasks(); // Mise à jour de la liste des tâches
      this.newTask = ''; // Réinitialisation du champ de saisie
    }
  }
  
  removeTask(index: number): void {
    this.taskService.removeTask(index);
    this.tasks = this.taskService.getTasks(); // Mettre à jour la liste affichée
  }
}
