import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environment/environment'
import { MeResponse } from '../models/core.module'
import { ResultCodes } from '../enums/core.enums'

@Injectable()
export class AuthService {
  isAuth = false

  constructor(private http: HttpClient) {}
  authMe() {
    return this.http.get<MeResponse>(`${environment.baseNetworkURL}/auth/me`).subscribe(res => {
      if (res.resultCode === ResultCodes.success) {
        this.isAuth = true
      }
    })
  }
}
