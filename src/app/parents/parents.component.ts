import { Component } from '@angular/core'

@Component({
  selector: 'inst-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss'],
})
export class ParentsComponent {
  isSuccess = true

  constructor() {
    setTimeout(() => {
      this.isSuccess = false
    }, 3000)
  }
}
