import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environment/environment'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  httpOptions = {
    withCredentials: true,
    header: new HttpHeaders().append('api-key', environment['apiKey']),
  }

  constructor(private http: HttpClient) {}

  getProfile(userId: number): Observable<any> {
    return this.http.get<any>(`${environment.baseNetworkURL}/profile/${userId}`, this.httpOptions)
  }
}
