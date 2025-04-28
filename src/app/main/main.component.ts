import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
    isLeftSidebarCollapsed = input.required<boolean>();
    screenWidth = input.required<number>();
    //  computed property called sizeClass using Vue's computed() function.
    // sizeClass is used to dynamically assign a CSS class
    sizeClass = computed(() => {
        const isLeftSidebarCollapsed = this.isLeftSidebarCollapsed();
        if (isLeftSidebarCollapsed) {
            return '';
        }
        return this.screenWidth() > 768 ? 'body-trimmed' : 'body-md-screen';
    })
}
