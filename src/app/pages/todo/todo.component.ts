import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  template: ` <h1>Todo Page</h1> `,
  standalone: true,
})
export class TodoComponents implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      console.log(param);
    });
    console.log('ID is: ', this.route.snapshot.paramMap.get('id'));
    console.log('Name is: ', this.route.snapshot.paramMap.get('name'));
  }
}
