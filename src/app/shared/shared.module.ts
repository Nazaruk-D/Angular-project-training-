import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationComponent } from './components/navigation/navigation.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [NavigationComponent, PageNotFoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationComponent],
})
export class SharedModule {}
