import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [NgFor,FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: {name: string; completed: boolean} [] =[
    {name: "salut",completed: false },
    {name:"bonjour",completed: false}
  ];
  newTask: string = '';

  addTask() {
    if(this.newTask.trim()){
      this.tasks.push({name: this.newTask.trim(), completed: false});
      this.newTask = '';
    }
  }
  removeTask(index: number){
    this.tasks.splice(index, 1)
  }

  toggleTaskState(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed; // Inverse l'état
  }

}
