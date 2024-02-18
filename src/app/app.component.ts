import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FormsModule],
  standalone: true,
})
export class AppComponent {
  name = 'Ali ';

  id = 'el-1';

  handleClick() {
    alert(`Hello ${this.name}`);
  }
  handleMouseEnter(e: MouseEvent) {
    console.log({ x: e.x, y: e.y });
  }
}
