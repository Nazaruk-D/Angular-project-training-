import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms';
import { ParentsComponent } from './parents/parents.component';
import { ChildrenComponent } from './parents/children/children.component'

@NgModule({
  declarations: [AppComponent, ParentsComponent, ChildrenComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
