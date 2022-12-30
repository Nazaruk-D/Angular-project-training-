import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'inst-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent {
  @Output() sendGradeEvent = new EventEmitter<string>()

  inputGrade = ''

  sendGradeHandler() {
    this.sendGradeEvent.emit(this.inputGrade)
    this.inputGrade = ''
  }
}
