import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  imports: [],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {
    let id = Number(this.route.snapshot.paramMap.get('id')); 
  }
}
