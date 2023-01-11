import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

interface BaseResponse<T = {}> {
  data: T
  message: string[]
  fieldsErrors: string[]
  resultCode: number
}

@Component({
  selector: 'inst-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],
})
export class CompAComponent implements OnInit {
  todos: Todo[] = []
  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': '1909a996-577e-417f-8ed9-b0307898e20c',
    },
  }

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.http
      .get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', this.httpOptions)
      .subscribe(res => {
        this.todos = res
        console.log(res)
      })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular ' + randomNumber
    this.http
      .post<BaseResponse<{ item: Todo }>>(
        'https://social-network.samuraijs.com/api/1.1/todo-lists',
        { title },
        this.httpOptions
      )
      .subscribe(res => {
        const newTodo = res.data.item
        this.todos.unshift(newTodo)
      })
  }
  deleteTodo() {
    const todoId = '9458254e-592c-44f1-89be-b0350f0b036b'
    this.http
      .delete<BaseResponse>(
        `https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`,
        this.httpOptions
      )
      .subscribe(res => {
        if (res.resultCode === 0) {
          this.todos = this.todos.filter(t => t.id !== todoId)
        }
      })
  }
}
