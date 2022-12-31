import { Component } from '@angular/core'

interface WeekGrade {
  id: number
  gradeItem: number
}

interface Lesson {
  id: number
  title: string
  weekGrades: WeekGrade[]
}

@Component({
  selector: 'inst-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss'],
})
export class ParentsComponent {
  lessons: Lesson[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        {
          id: 0,
          gradeItem: 5,
        },
        {
          id: 1,
          gradeItem: 5,
        },
        {
          id: 2,
          gradeItem: 5,
        },
      ],
    },
    {
      id: 1,
      title: 'Physic',
      weekGrades: [
        {
          id: 0,
          gradeItem: 4,
        },
        {
          id: 1,
          gradeItem: 5,
        },
        {
          id: 2,
          gradeItem: 2,
        },
      ],
    },
  ]

  isLoading = true

  constructor() {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }

  getGrade(grade: string) {
    // this.grades.push(grade)
    // this.math = value.math
    // this.phys = value.phys
  }
}
