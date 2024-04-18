import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home Page</h1>
    <button (click)="handleNavigateTodo()">Navigate to todo page</button>
  `,
  standalone: true,
})
export class HomeComponents implements OnInit {
  router: Router = inject(Router);
  constructor() {}

  ngOnInit(): void {}

  handleNavigateTodo() {
    this.router.navigate(['todo', 1023, 'Todo number one']);
  }
}
