import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, AfterViewInit{
  // animStop_1=false;
  // animStop_2=false;
  // textSummer = `прокат туристического снаряжения<br>
  // велотуры<br>
  // сплавы<br>
  // походы<br>
  // путешествие по миру`;

  // textWinter = `Горнолыжные туры:<br>
  // горы Урала<br>
  // Шерегеш<br>
  // Казахстан<br>
  // Киргизия<br>
  // Кавказ<br>`
  constructor( private router: Router) { }

  ngOnInit(): void {
    // this.animText.bind(this)
    // this.printText.bind(this);
  }
  ngAfterViewInit(){
    // if (window.innerWidth<1024){
    //   setTimeout(()=>{
    //     this.animText(3);
    //   }, 2000);
    // }
  }

  goPage(season){
    this.router.navigate(
        ['/trips'],
        {
          queryParams:{
            'season': season,
        }
      }
    );
  }

  // initAnimText(event){
  //   if (window.innerWidth>=1024){
  //     if (event.target.classList.contains("preview__container_1") && !this.animStop_1){
  //       this.animText(1)
  //       this.animStop_1 = true;
  //     }else if (event.target.classList.contains("preview__container_2") && !this.animStop_2){
  //       this.animText(2)
  //       this.animStop_2 = true;
  //     }
  //   }
  // }

  // animText(number){
  //   let el = document.querySelectorAll( '.preview__text' );
  //   if (number==1) this.printText( el[0], this.textSummer );
  //   else if (number==2) this.printText( el[1], this.textWinter );
  //   else if (number == 3){
  //     this.printText( el[0], this.textSummer );
  //     this.printText( el[1], this.textWinter );
  //   }

  // }

  // printText(el, text ){
  //   let letterTimeout = 150

  //   let i = 1
  //   let print__fn = function(){
  //       if( i <= text.length ){
  //         if (text[i] == '<') i = i+2
  //         el.innerHTML = text.substr( 0, i );
  //         setTimeout( print__fn, letterTimeout );
  //       }
  //       i++;
  //     }
  //   print__fn() // init
  // }


}
