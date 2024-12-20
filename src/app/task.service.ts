import { Injectable } from '@angular/core';

export interface Task {
  name: string;
  completed: boolean;
  dueDate?: Date;      
  creationDate: Date;  
  assignedTo?: string; 
  type?: string;       
  priority?: string; 
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private localStorageKey = 'tasks'; // Clé pour stocker les tâches dans le localStorage

  constructor() {}

  // Méthode pour récupérer les tâches depuis le localStorage
  getTasks(): Task[] {
    const tasks = localStorage.getItem(this.localStorageKey);
    return tasks ? JSON.parse(tasks) : []; // Retourne les tâches ou un tableau vide si elles n'existent pas
  }

  // Méthode pour sauvegarder les tâches dans le localStorage
  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }

  // Méthode pour ajouter une tâche
  addTask(task: Partial<Task>): void {
    const tasks = this.getTasks();
    tasks.push({
      ...task,
      completed: task.completed || false,
      creationDate: new Date(),
    } as Task);
    this.saveTasks(tasks);
  }
  

  // Méthode pour supprimer une tâche par son index
  removeTask(index: number): void {
    const tasks = this.getTasks();
    tasks.splice(index, 1);
    this.saveTasks(tasks);
  }

  // Méthode pour récupérer une tâche par son index
  getTaskByIndex(index: number): Task | undefined {
    const tasks = this.getTasks();
    return tasks[index];
  }
}
