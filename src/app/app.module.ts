import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CompAComponent } from './components/comp-a/comp-a.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { LoginComponent } from './components/login/login.component'
import { UsersComponent } from './components/users/users.component'
import { ProfileComponent } from './components/profile/profile.component'
import { AppRoutingRoutingModule } from './app-routing-routing.module'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { CredentialsInterceptor } from './interceptors/credentials.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingRoutingModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
