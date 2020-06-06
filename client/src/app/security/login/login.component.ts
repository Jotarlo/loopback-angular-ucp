import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/security/login.service';
import { UserModel } from 'src/app/models/security/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidation: FormGroup;
  user: UserModel;

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router) {

  }


  ngOnInit(): void {
    this.fgValidationBuilder();
  }

  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]]
    });
  }

  loginClickEvent() {
    if (this.fgValidation.invalid) {
      alert("You need to complete all fields.");
    } else {
      let u = this.fg.username.value;
      let p = this.fg.password.value;
      this.loginService.loginUser(u, p).subscribe((data) => {
        this.user = data;
        console.log(data);
        this.user.isLogged = true;
        this.loginService.setLogged(this.user);
        this.router.navigate(["/"]);
      });
    }
  }

  get fg() {
    return this.fgValidation.controls;
  }

}
