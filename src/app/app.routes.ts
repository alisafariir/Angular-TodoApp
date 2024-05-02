import { Routes } from '@angular/router';
import { HomeComponents } from './pages/home/home.component';
import { TodoComponents } from './pages/todo/todo.component';
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./pages/home/home.routes').then((c) => c.routes),
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
