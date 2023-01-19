import { Component, OnInit } from '@angular/core'
import { TodosService } from '../../services/todos.service'
import { Observable, Subscription } from 'rxjs'
import { Todo } from '../../models/todos.model'

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
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
