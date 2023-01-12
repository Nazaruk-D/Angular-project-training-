import { Component, OnInit } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Todo, TodosService } from '../services/todos.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'inst-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],
})
export class CompAComponent implements OnInit {
  todos: Todo[] = []
  error = ''

  constructor(private todosService: TodosService) {}
  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.todosService.getTodos().subscribe({
      next: (res: Todo[]) => {
        this.todos = res
      },
      error: (err: HttpErrorResponse) => {
        this.error = err.message
      },
    })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular ' + randomNumber
    this.todosService.createTodo(title).subscribe(res => {
      const newTodo = res.data.item
      this.todos.unshift(newTodo)
    })
  }
  deleteTodo() {
    const todoId = '1ad07d48-7087-4d3d-b884-5b67df9076eb'
    this.todosService.deleteTodo(todoId).subscribe(res => {
      if (res.resultCode === 0) {
        this.todos = this.todos.filter(t => t.id !== todoId)
      }
    })
  }
}
