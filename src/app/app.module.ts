import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CompAComponent } from './comp-a/comp-a.component'
import { HttpClientModule } from '@angular/common/http'
import { LoginComponent } from './login/login.component'
import { UsersComponent } from './components/users/users.component'
import { ProfileComponent } from './components/profile/profile.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [AppComponent, CompAComponent, LoginComponent, UsersComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProfileComponent },
      { path: 'login', component: LoginComponent },
      { path: 'compA', component: CompAComponent },
      { path: 'users', component: UsersComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
