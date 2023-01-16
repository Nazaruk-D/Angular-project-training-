import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProfileComponent } from './components/profile/profile.component'
import { LoginComponent } from './login/login.component'
import { CompAComponent } from './comp-a/comp-a.component'
import { UsersComponent } from './components/users/users.component'

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'compA', component: CompAComponent },
  { path: 'users', component: UsersComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
