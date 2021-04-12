import { Component, OnInit, Input, ViewChild,  ElementRef} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  @Input() rent;
  @Input() equipmentIndex;
  @Input() equipmentSmall;


  @ViewChild('formRentNative') formRentNative:ElementRef;
  formRent:FormGroup;
  mask = ['+','7','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/];
  maskDate=[/\d/, /\d/,'.',/\d/, /\d/,'.',/\d/, /\d/,/\d/, /\d/,];
  openPopupRent = false;// открытия попапа забронировать
  messageIsSent = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.rent);
    // инициализирую форму бронирования поездки
    this.formRent = new FormGroup({
      // поля для php, чтобы отправить письмо
      project_name: new FormControl('Positive'),
      admin_email: new FormControl('pozitivtour74@pozitivtour74.ru'),
      form_subject: new FormControl('Прокат оборудования'),
      rent: new FormControl(this.rent.title),
      name: new FormControl('', [
        Validators.required,
      ]),
      tel: new FormControl('', [
        Validators.required,
        Validators.pattern(/\+7\([0-9]{1}[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/),
      ]),
      // footSize: new FormControl(''),
      // height: new FormControl(''),
      // weight: new FormControl(''),
      // clothingSize: new FormControl(''),
      // headСircumference: new FormControl(''),
      comment:new FormControl(''),
    });
  }
  openPopup(event){
    event.preventDefault();
    this.messageIsSent = false;
    this.openPopupRent = true;
  }

  submit(){
    this.messageIsSent = true;
    this.formRentNative.nativeElement.rent.value = this.rent.title;
    fetch("assets/php/mail.php", {
        method: "POST",
        body: new FormData(this.formRentNative.nativeElement)
      })
      .then(data=>{
      })
      .catch(function(error) { console.log(error); });
  }

  // форма забронировать поездку
  closePopup(event){
    if (event.target.classList.contains('popup')){
      this.openPopupRent = false;
    }
  }

  goToPage(){
    window.location.href= `/rent#${this.equipmentIndex}`;
  }

}
