import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'inst-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,5}$'),
    ]),
    password: new FormControl('', [Validators.required]),
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
