import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable()
export class TodoService {
  httpClient: HttpClient = inject(HttpClient);

  getTodo(id: number) {
    return this.httpClient.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
  }
}
