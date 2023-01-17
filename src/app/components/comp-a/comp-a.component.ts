import { Component, OnDestroy, OnInit } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Todo, TodosService } from '../../services/todos.service'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'inst-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],
})
export class CompAComponent implements OnInit {
  todos$!: Observable<Todo[]>
  error = ''

  subscriptions: Subscription = new Subscription()

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos$ = this.todosService.todos$
    this.getTodos()
  }

  getTodos() {
    this.todosService.getTodos()
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular ' + randomNumber
    this.todosService.createTodo(title)
  }
  deleteTodo() {
    const todoId = '7abab858-7d27-4f1f-851f-e84e72af52e2'
    this.todosService.deleteTodo(todoId)
  }
}
