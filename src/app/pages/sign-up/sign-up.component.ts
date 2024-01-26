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
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ButtonComponent,
    NgOptimizedImage,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  private router: Router = inject(Router);
  signUpForm: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.min(2)],
    }),
    username: new FormControl('', {
      validators: [Validators.required, Validators.min(3)],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.min(5)],
    }),
  });
  signUp(): void {
    if (this.signUpForm.valid) {
      this.router.navigateByUrl('/auth/sign-up');
    } else {
      console.log('Logged Out');
    }
  }
}
