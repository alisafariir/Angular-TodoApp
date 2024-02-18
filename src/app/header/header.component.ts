import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [],
  providers: [],
})
export class HeaderComponent implements OnInit {
  @Input()
  caption = '';

  @Output()
  onLogoutClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleLogoutClick() {
    this.onLogoutClick.emit(this.caption);
  }

  onMouseOver(e: MouseEvent) {
    console.log(e);
  }
}
