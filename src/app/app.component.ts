import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LeftSidebarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // signal<T>() is a reactive state management feature in Angular.
  isLeftSidebarCollapsed = signal<boolean>(false);
  // stores current width of rbowser window
  screenWidth = signal<number>(window.innerWidth); // Initially set to window.innerWidth (e.g., 1920 on a full-screen desktop).

  // @HostListener is an Angular decorator that listens for DOM events on the host element or global window.
  @HostListener('window:resize') // Here, it listens to the resize event on the window object.
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if(this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    // updated dynamically using .set(value)
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
