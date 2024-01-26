import { ButtonComponent } from '@/app/components/ui/button/button.component';
import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  private router: Router = inject(Router);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.min(5)],
    }),
  });
  signIn(): void {
    if (this.loginForm.valid) {
      this.router.navigateByUrl("/home");
    } else {
      console.log('Invalid Login');
    }
  }
}
