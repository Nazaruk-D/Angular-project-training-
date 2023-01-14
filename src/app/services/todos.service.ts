import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, catchError, EMPTY, map, throwError } from 'rxjs'
import { environment } from '../../environment/environment'
import { BeatyLoggerService } from './beaty-logger.service'

export interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

export interface BaseResponse<T = {}> {
  data: T
  message: string[]
  fieldsErrors: string[]
  resultCode: number
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])

  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': environment.apiKey,
    },
  }
  constructor(private http: HttpClient, private beatyLoggerService: BeatyLoggerService) {}

  getTodos() {
    this.http
      .get<Todo[]>(`${environment.baseURL}/todo-lists`, this.httpOptions)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  createTodo(title: string) {
    this.http
      .post<BaseResponse<{ item: Todo }>>(
        `${environment.baseURL}/todo-lists`,
        { title },
        this.httpOptions
      )
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(res => {
          const newTodo = res.data.item
          const stateTodo = this.todos$.getValue()
          return [newTodo, ...stateTodo]
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  deleteTodo(todoId: string) {
    this.http
      .delete<BaseResponse>(`${environment.baseURL}/todo-lists/${todoId}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(() => {
          return this.todos$.getValue().filter(tl => tl.id !== todoId)
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  private errorHandler(err: HttpErrorResponse) {
    this.beatyLoggerService.log(err.message, 'error')
    return EMPTY
  }
}
