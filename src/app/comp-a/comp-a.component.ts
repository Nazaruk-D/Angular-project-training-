import { Component, OnInit } from '@angular/core'
import { ValueService } from '../services/value.service'
import { Observable } from 'rxjs'
import { BeatyLoggerService } from '../services/beaty-logger.service'
import { HttpClient } from '@angular/common/http'

interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

@Component({
  selector: 'inst-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],
})
export class CompAComponent implements OnInit {
  todos: Todo[] = []

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.http
      .get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', {
        withCredentials: true,
        headers: {
          'api-key': '1909a996-577e-417f-8ed9-b0307898e20c',
        },
      })
      .subscribe(res => {
        this.todos = res
        console.log(res)
      })
  }
}
