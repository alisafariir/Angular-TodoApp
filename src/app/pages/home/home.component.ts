import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [MatListModule, MatListModule],
})
export class HomeComponents implements OnInit {
  router: Router = inject(Router);
  constructor() {}

  ngOnInit(): void {}

  handleNavigateTodo() {
    this.router.navigate(['todo', 1023, 'Todo number one']);
  }

  handleClick(e: MouseEvent) {
    console.log(e);
  }
}
