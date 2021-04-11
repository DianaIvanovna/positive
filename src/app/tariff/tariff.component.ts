import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss']
})
export class TariffComponent implements OnInit {
  @Input() season;
  @Input() trip;
  @ViewChild('formBookNative') formBookNative:ElementRef;

  bookTrip = false; // открытия попапа забронировать


  formBook:FormGroup;
  mask = ['+','7','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/];
  maskDate=[/\d/, /\d/,'.',/\d/, /\d/,'.',/\d/, /\d/,/\d/, /\d/,];
  messageIsSent = 1;
  tariff = '' ;

  constructor() { }

  ngOnInit(): void {
     // инициализирую форму бронирования поездки
    this.formBook = new FormGroup({
      // поля для php, чтобы отправить письмо
      project_name: new FormControl('Positive'),
      admin_email: new FormControl('pozitivtour74@pozitivtour74.ru'),
      form_subject: new FormControl('Бронирование поездки'),
      trip: new FormControl(this.trip.title),
      dateTrip: new FormControl(this.trip.date),
      tariff: new FormControl(''),
      name: new FormControl('', [
        Validators.required,
      ]),
      tel: new FormControl('', [
        Validators.required,
        Validators.pattern(/\+7\([0-9]{1}[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/),
      ]),
      numberPerson: new FormControl('', [
        Validators.required,
      ]),
      dateBirth: new FormControl('', [
        Validators.required,
        Validators.pattern(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/),
      ]),
      comment:new FormControl(''),
    });
  }

    // форма забронировать поездку
    closePopup(event){
      if (event.target.classList.contains('popup')){
        this.bookTrip = false;
      }
    }


  submit(){
    this.messageIsSent = 2;
    this.formBookNative.nativeElement.tariff.value = this.tariff;
    fetch("assets/php/mail.php", {
        method: "POST",
        body: new FormData(this.formBookNative.nativeElement)
      })
      .then(data=>{
      })
      .catch(function(error) { console.log(error); });
  }

  openPopup(tarif){
    this.tariff = tarif;
    // очищает форму
    // this.formBook.reset();
    this.messageIsSent = 1; // !!!!!!!!!!!!!!!!!!!!!!!!!!
    this.bookTrip = true;
  }



}
