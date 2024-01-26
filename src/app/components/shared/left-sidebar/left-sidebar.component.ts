import { ButtonComponent } from '@/app/components/ui/button/button.component';
import { sidebarLinks } from '@/constants';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage, RouterLinkActive, ButtonComponent],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css',
})
export class LeftSidebarComponent {
  readonly sidebarLinks = sidebarLinks;
}
