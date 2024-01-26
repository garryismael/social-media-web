import { bottombarLinks } from '@/constants';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-bottombar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterModule, RouterLinkActive],
  templateUrl: './bottombar.component.html',
  styleUrl: './bottombar.component.css',
})
export class BottombarComponent {
  public readonly bottombarLinks = bottombarLinks;
}
