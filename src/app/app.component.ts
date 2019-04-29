import { Component, HostListener } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wedding';
  time: number;
  constructor() {
    var startDate = new Date();
    var endDate = new Date('05/17/2019');
    this.time = (endDate.getTime() - startDate.getTime()) / 1000;   
  }
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    var scroll = $(window).scrollTop();
    if (scroll > 500) {
      $(".navbar").addClass("addBg");
    }
    else {
      $(".navbar").removeClass("addBg");
    }
  }
}
