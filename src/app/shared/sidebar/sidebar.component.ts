import { Component, inject, input, signal } from '@angular/core';
import { NavItem } from '@core/constants/navs';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, MatIconModule, MatRippleModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  private router = inject(Router);
  navs = input.required<NavItem[]>();
  currentRoute = signal(this.router.url);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute.set(this.router.url);
        console.log(this.router.url);
      });
  }

  checkIfActive(route: string): boolean {
    return this.currentRoute().includes(route);
  }
}
