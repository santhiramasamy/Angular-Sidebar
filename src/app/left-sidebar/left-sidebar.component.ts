import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css',
})
export class LeftSidebarComponent {
  // This is defining an input property using Angular signals 
  isLeftSidebarCollapsed = input.required<boolean>(); // Correct Syntax (Older Approach Using @Input)
  // This defines an output event emitter using Angular signals.
  changeIsLeftSidebarCollapsed = output<boolean>(); // 🔹 Correct Syntax (Older Approach Using @Output)
  items = [
    {
      routeLink: 'dashboard', // The route/path for navigation.
      icon: 'fa-solid fa-house', // The FontAwesome icon class for visual representation.
      label: 'Dashboard', // The text displayed in the sidebar.
    },
    {
      routeLink: 'products',
      icon: 'fa-solid fa-gift',
      label: 'Products',
    },
    {
      routeLink: 'pages',
      icon: 'fa-solid fa-file',
      label: 'Pages',
    },
    {
      routeLink: 'settings',
      icon: 'fa-solid fa-gear',
      label: 'Settings',
    },
  ];

  // emit sends the new state 
  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
