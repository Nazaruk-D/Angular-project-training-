import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environment/environment'
import { map, Observable } from 'rxjs'
import { User, UsersResponse } from '../model/user.module'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<User[]> {
    return this.http
      .get<UsersResponse>(`${environment.baseNetworkURL}/users?page=${page}`)
      .pipe(map(el => el.items))
  }
}
