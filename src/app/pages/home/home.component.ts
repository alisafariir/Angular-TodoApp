import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [MatListModule, MatListModule, MatCardModule, MatButtonModule],
})
export class HomeComponents implements OnInit {
  router: Router = inject(Router);

  user: any = {
    token: '1215a4sd5sa4da5s4d5sa4d',
    firstName: 'Ali',
    lastName: 'Safari',
    region: 'AF',
  };

  todos: any[] = [
    // {
    //   userId: 1,
    //   id: 1,
    //   title: 'delectus aut autem',
    //   completed: false,
    // },
    // {
    //   userId: 1,
    //   id: 2,
    //   title: 'quis ut nam facilis et officia qui',
    //   completed: false,
    // },
    // {
    //   userId: 1,
    //   id: 3,
    //   title: 'fugiat veniam minus',
    //   completed: false,
    // },
    // {
    //   userId: 1,
    //   id: 4,
    //   title: 'et porro tempora',
    //   completed: true,
    // },
    // {
    //   userId: 1,
    //   id: 5,
    //   title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    //   completed: false,
    // },
  ];
  constructor() {}

  ngOnInit(): void {}

  handleNavigateTodo() {
    this.router.navigate(['todo', 1023, 'Todo number one']);
  }

  handleClick(e: MouseEvent) {
    console.log(e);
  }
}
