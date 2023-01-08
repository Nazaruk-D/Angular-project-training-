import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ValueService {
  value = 0

  addValue() {
    this.value = this.value + 1
  }

  decValue() {
    this.value = this.value - 1
  }
}
