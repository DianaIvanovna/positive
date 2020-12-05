import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  @Input() equipment;
  constructor() { }

  ngOnInit(): void {
  }

}
