import { Component } from '@angular/core';
import { SharedService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customers Database';

  constructor() { }
}
