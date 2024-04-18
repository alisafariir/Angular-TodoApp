import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MatToolbarModule],
  providers: [],
})
export class HeaderComponent {
  @Input()
  caption: string = 'Home';

  @Output()
  onCaptionClick: EventEmitter<any> = new EventEmitter();

  handleCaptionClick() {
    this.onCaptionClick.emit(this.caption);
  }
}
