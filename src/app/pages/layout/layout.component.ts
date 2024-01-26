import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TopbarComponent } from '@/app/components/shared/topbar/topbar.component';
import { LeftSidebarComponent } from '@/app/components/shared/left-sidebar/left-sidebar.component';
import { BottombarComponent } from '@/app/components/shared/bottombar/bottombar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    TopbarComponent,
    LeftSidebarComponent,
    BottombarComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
