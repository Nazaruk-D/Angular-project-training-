import { Component, EventEmitter, Output } from '@angular/core'

export interface Grade {
  math: number
  phys: number
}

@Component({
  selector: 'inst-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent {
  @Output() sendGradeEvent = new EventEmitter<Grade>()
  sendGradeHandler() {
    const math = 5
    const phys = 4
    this.sendGradeEvent.emit({ math, phys })
  }
}
