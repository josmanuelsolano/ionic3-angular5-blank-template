import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'home-page',
  templateUrl: 'home-page.component.html',
})
export class HomePageComponent implements OnInit {
  constructor(public navCtrl: NavController) {  }

  ngOnInit() {}
}
