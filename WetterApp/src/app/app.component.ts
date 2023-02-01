import {Component} from '@angular/core';
import {WeatherService} from "./services/weather.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wetter-Projekt';
  constructor(private wetter: WeatherService) {
    this.wetter.getWeatherData("Seattle").subscribe((data:any)=>{
      console.log(data);
    },
    (err:HttpErrorResponse)=> {
      console.log(err.message);

    });
  }
}
