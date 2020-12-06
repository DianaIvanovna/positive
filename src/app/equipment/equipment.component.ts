import { Component, OnInit, Input } from '@angular/core';
interface EquipmentPrice{
  title: string,
  titleDisabled: string,
  withUs: number,
  withoutUs: number,
}
interface Equipment {
  title: string,
  description: string,
  price: EquipmentPrice[],
  img: string,
}

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  @Input() equipment:Equipment;
  constructor() { }

  ngOnInit(): void {
  }

}
