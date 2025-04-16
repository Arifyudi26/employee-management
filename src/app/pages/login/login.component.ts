import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    // Hardcoded credentials
    const validUsername = 'admin';
    const validPassword = '12345';

    // Validate login with hardcoded data
    if (this.username === validUsername && this.password === validPassword) {
      this.loginError = false;
      // Navigate to Employee List page if login is successful
      this.router.navigate(['/employees']);
    } else {
      this.loginError = true;
    }
  }
}
