import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  form:FormGroup
  mask = ['+','7','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/];
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      tel: new FormControl('', [
        Validators.required,
        Validators.pattern(/\+7\([0-9]{1}[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/),
      ])
    });
  }
  submit(){
    console.log(this.form);
  }
}
