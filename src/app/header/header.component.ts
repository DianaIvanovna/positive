import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentInit {
  @Input() season:string;

  showScroll = false;
  mobule = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // добавление линии у хедера при скролле
    document.addEventListener('scroll',() => {
      if (window.pageYOffset != 0){
        this.showScroll = true;
      }else{
        this.showScroll = false;
      }

    })
  }
  ngAfterContentInit(){
    this.activatedRoute.fragment.subscribe(value => {
      if (value){
        setTimeout(()=>{
          this.smoothScroll(value);
        }, 300);
      }
    })
  }


  scrollTo(event){
    event.preventDefault();
    this.mobule = false;
    const link = event.target.getAttribute('data-href');
    const anchor = event.target.getAttribute('data-anchor');
    console.log(link, anchor);
    this.router.navigate( [link], {
      queryParams: {
        'season': this.season,
      },
      fragment: anchor
    });
  }

  smoothScroll(anchor){
    const element:HTMLElement = document.querySelector('#' + anchor);
    console.log("Scroooollllll!!!!!!!", element);
    if (element !== null) {
      let rect = element.getBoundingClientRect();
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let elementTop = rect.top + scrollTop;
      window.scroll({
        left:0,
        top: elementTop,
        behavior: 'smooth'
      })
    }
  }

  goToPage(){
    this.mobule = false;
  }
}
