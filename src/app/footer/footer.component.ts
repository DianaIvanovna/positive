import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @ViewChild('formNative') formNative:ElementRef;
  form:FormGroup;
  mask = ['+','7','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/];
  constructor(private http: HttpClient) {
  }
  messageIsSent = false;


  ngOnInit(): void {
    this.form = new FormGroup({
      // поля для php, чтобы отправить письмо
      project_name: new FormControl('Positive'),
      admin_email: new FormControl('pozitivtour74@pozitivtour74.ru'),
      form_subject: new FormControl('Заявка на обратный звонок'),
      name: new FormControl('', [
        Validators.required,
      ]),
      tel: new FormControl('', [
        Validators.required,
        Validators.pattern(/\+7\([0-9]{1}[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/),
      ]),
    });
  }
  submit(){
    this.messageIsSent = true;
    fetch("assets/php/mail.php", {
        method: "POST",
        body: new FormData(this.formNative.nativeElement)
      })
      .then(data=>{})
      .catch(function(error) { console.log(error); });
  }
 }
