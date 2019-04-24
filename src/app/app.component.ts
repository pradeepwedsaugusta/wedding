import { Component } from '@angular/core';
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
}
