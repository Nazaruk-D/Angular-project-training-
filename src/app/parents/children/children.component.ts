import { Component, Input } from '@angular/core'
import { Address } from '../parents.component'

@Component({
  selector: 'inst-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent {
  name = 'Viktor'
  @Input() surNameProps?: string
  @Input() address!: Address
}
