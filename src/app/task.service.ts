import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task [] =[
    {name: "salut",completed: false },
    {name:"bonjour",completed: false}
  ];
  constructor() { }

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
  getTasks(): Task[] {
    return this.tasks;
  }
}

export interface Task { 
  name: string; 
  completed: boolean;
 } 


 
 


  



