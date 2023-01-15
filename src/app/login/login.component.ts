import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'inst-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
  })

  get firstName() {
    return this.profileForm.get('firstName')
  }

  onSubmit() {
    alert(JSON.stringify(this.profileForm.value))
  }

  ngOnInit(): void {}
}
