import { Component } from '@angular/core'

// interface Fruit {
//   id: string
//   name: string
//   price: number
// }

@Component({
  selector: 'inst-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss'],
})
export class ParentsComponent {
  title = 'Lorem ipsum dolor sit'
  url = 'https://samurai.it-incubator.ru/pc/video-content/watch/63493d258e2ab188611d08e6'
  date = new Date(2023, 1, 6, 14)
  // fruits: Fruit[] = [
  //   { id: '1', name: 'apple', price: 10 },
  //   { id: '2', name: 'orange', price: 20 },
  //   { id: '3', name: 'watermelon', price: 30 },
  //   { id: '4', name: 'banana', price: 5 },
  //   { id: '5', name: 'pears', price: 12 },
  //   { id: '6', name: 'raspberries', price: 18 },
  //   { id: '7', name: 'avocados', price: 14 },
  //   { id: '8', name: 'mangoes', price: 3 },
  //   { id: '9', name: 'kiwifruit', price: 7 },
  // ]
}
