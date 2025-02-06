import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgProgressbar } from 'ngx-progressbar';
import { NgProgressRouter } from 'ngx-progressbar/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgProgressbar, NgProgressRouter],
  template: ` <ng-progress ngProgressRouter />
    <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'wuwapal';
}
