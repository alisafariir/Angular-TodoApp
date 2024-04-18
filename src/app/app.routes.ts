import { Routes } from '@angular/router';
import { HomeComponents } from './pages/home/home.component';
import { TodoComponents } from './pages/todo/todo.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponents,
  },
  {
    path: 'todo',
    component: TodoComponents,
  },
  {
    path: 'todo/:id',
    component: TodoComponents,
  },
  {
    path: 'todo/:id/:name',
    component: TodoComponents,
  },
];
