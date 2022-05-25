import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  darkMode = false;
  condition = '';
  currentTemp = 0;
  minTemp = 0;
  maxTemp = 0;

  constructor() { }

  ngOnInit(): void {
  }

  openDetails() {
    console.log(this.darkMode);
  }

}
