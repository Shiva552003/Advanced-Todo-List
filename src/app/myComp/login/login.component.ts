import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router){}
  @Output() isLoggedIn = new EventEmitter<boolean>();

  onSubmit() {
    const validUsername = 'demouser';
    const validPassword = '123';

    if (this.username === validUsername && this.password === validPassword) {
      this.router.navigate(["home"]);
      this.isLoggedIn.emit(true);
      alert('Login successful');
    } else {
      alert('Login failed');
    }
  }
}
