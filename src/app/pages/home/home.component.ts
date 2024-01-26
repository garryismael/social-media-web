import { PostCardComponent } from '@/app/components/shared/post-card/post-card.component';
import { UserCardComponent } from '@/app/components/shared/user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PostCardComponent, UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
