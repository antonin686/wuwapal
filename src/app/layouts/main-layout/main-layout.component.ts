import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { SIDEBAR_NAVS } from '@core/constants/navs';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, SidebarComponent],
  template: `<div class="flex">
    <app-sidebar [navs]="navItems" />
    <main class="flex flex-col md:h-screen container mx-auto p-10 gap-10">
      <router-outlet></router-outlet>
    </main>
  </div>`,
})
export class MainLayoutComponent {
  navItems = SIDEBAR_NAVS;
}
