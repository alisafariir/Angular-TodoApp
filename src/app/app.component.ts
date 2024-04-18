import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './services/local-storage.service';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FormsModule,
    HttpClientModule,
  ],
  standalone: true,
  providers: [TodoService],
})
export class AppComponent {
  localstorageService: LocalStorageService = inject(LocalStorageService);
  todoService: TodoService = inject(TodoService);
  user: any;

  constructor() {
    this.handleGetUserData();
    this.todoService.getTodo(2).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {},
    });
  }

  handleSetUserData() {
    this.localstorageService.set('USER', { name: 'Ali', age: 30 });
  }

  handleGetUserData() {
    this.user = this.localstorageService.get('USER');
  }
}
