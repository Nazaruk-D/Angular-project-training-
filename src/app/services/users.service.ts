import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environment/environment'
import { map, Observable } from 'rxjs'

interface UsersResponse {
  items: User[]
  totalCount: number
}

export interface User {
  name: string
  id: number
  photos: {
    small: string
    large: string
  }
  followed: boolean
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  httpOptions = {
    withCredentials: true,
    header: new HttpHeaders().append('api-key', environment['apiKey']),
    // headers: {
    //   'api-key': environment.apiKey,
    // },
  }

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<User[]> {
    return this.http
      .get<UsersResponse>(`${environment.baseNetworkURL}/users?page=${page}`, this.httpOptions)
      .pipe(map(el => el.items))
  }
}
