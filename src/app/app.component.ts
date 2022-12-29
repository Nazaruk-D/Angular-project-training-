import { Component } from '@angular/core'

@Component({
  selector: 'inst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'Instagram'
  text = 'start value'

  // changeTitleHandler() {
  //   this.appTitle = 'IT'
  // }
  //
  // changeTextHandler(event: Event) {
  //   this.text = (event.currentTarget as HTMLInputElement).value
  // }
}
