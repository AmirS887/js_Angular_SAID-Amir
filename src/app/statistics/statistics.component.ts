import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  tasks: Task[] = [];
  completedStats: { name: string; value: number }[] = [];
  priorityStats: { name: string; value: number }[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();

    // Calculer les statistiques des tâches terminées
    const completedCount = this.tasks.filter(task => task.completed).length;
    const notCompletedCount = this.tasks.length - completedCount;
    this.completedStats = [
      { name: 'Terminées', value: completedCount },
      { name: 'En cours', value: notCompletedCount }
    ];

    // Calculer les statistiques par criticité
    const priorityMap: { [key: string]: number } = {};
    this.tasks.forEach(task => {
      if (task.priority) {
        priorityMap[task.priority] = (priorityMap[task.priority] || 0) + 1;
      }
    });
    this.priorityStats = Object.keys(priorityMap).map(priority => ({
      name: priority,
      value: priorityMap[priority]
    }));
  }
}
