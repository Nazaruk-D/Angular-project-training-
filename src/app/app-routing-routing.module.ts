import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProfileComponent } from './home/components/profile/profile.component'

const routes: Routes = [
  // { path: '', component: ProfileComponent },
  // { path: '404', component: PageNotFoundComponent },
  // { path: '**', redirectTo: '404' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
