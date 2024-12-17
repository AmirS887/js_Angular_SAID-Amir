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
}

export interface Task { 
  name: string; 
  completed: boolean;
 } 


  



