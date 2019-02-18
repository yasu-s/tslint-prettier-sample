import { APP_BASE_HREF, Location } from '@angular/common';
import { Component } from '@angular/core';
import { of, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-sample';
  aaaa = '';
  bbb = '';
}
