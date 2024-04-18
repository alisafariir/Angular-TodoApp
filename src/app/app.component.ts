import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponents } from './pages/home/home.component';
import { TodoComponents } from './pages/todo/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HomeComponents,
    TodoComponents,
  ],
  standalone: true,
  providers: [],
})
export class AppComponent {}
