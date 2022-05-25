import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WeatherApp';
  showMenu = false;
  darkModeActive = false;

  toggleMenu() {
    if(!this.showMenu){
      this.showMenu = true;
    } else {
      this.showMenu = false;
    }
  }

  modeToggleSwitch() {
    if(!this.darkModeActive) {
      this.darkModeActive = true;
    } else {
      this.darkModeActive = false;
    }
  }

}
