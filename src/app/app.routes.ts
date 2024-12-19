import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { HomeComponent } from './home/home.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
export const routes: Routes = [
    {
        path: 'tasks',
        component: TaskListComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '/task/:index',
        component: TaskDetailComponent
    }
    
]