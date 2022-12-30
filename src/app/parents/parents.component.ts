import { Component } from '@angular/core'
import { Grade } from './children/children.component'

@Component({
  selector: 'inst-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss'],
})
export class ParentsComponent {
  math?: number = undefined
  phys?: number = undefined
  getGrade(value: Grade) {
    this.math = value.math
    this.phys = value.phys
  }
}
