import { Component } from '@angular/core'

@Component({
  selector: 'inst-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss'],
})
export class ParentsComponent {
  grades: string[] = ['math:5', 'english:3']

  getGrade(grade: string) {
    this.grades.push(grade)
    // this.math = value.math
    // this.phys = value.phys
  }
}
