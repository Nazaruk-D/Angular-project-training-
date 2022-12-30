import { Component } from '@angular/core'

export interface Address {
  city: string
  street: string
  house: number
}

@Component({
  selector: 'inst-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss'],
})
export class ParentsComponent {
  name = 'Ivan'
  surName = 'Petrov'
  address: Address = {
    city: 'Minsk',
    street: 'Some',
    house: 11,
  }
}
