import { Component, OnInit } from '@angular/core'
import { ValueService } from '../services/value.service'

@Component({
  selector: 'inst-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss'],
  providers: [ValueService],
})
export class ParentsComponent implements OnInit {
  constructor(private valueService: ValueService) {}
  value = 0
  //public test = 0 // test = 0 public ang проставит по умолчанию
  //private test2 = 0 // не позволит отрисовать, но позволяет работать внктри класса
  //protected test3 = 0 // внутри класса можно работать, но свойства и методы доступны только наследникам класса

  // getValue() {
  //   this.test = 2
  // }

  ngOnInit(): void {
    this.value = this.valueService.value
  }
}
