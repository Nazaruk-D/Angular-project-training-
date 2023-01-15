import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'inst-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  get firstName() {
    return this.profileForm.get('firstName')
  }
  get lastName() {
    return this.profileForm.get('lastName')
  }
  get email() {
    return this.profileForm.get('email')
  }
  get password() {
    return this.profileForm.get('password')
  }

  onSubmit() {
    alert(JSON.stringify(this.profileForm.value))
  }

  ngOnInit(): void {}
}
