import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit, AfterContentChecked {
  current: ICurrentWeather;

  constructor(private weatherService: WeatherService) {   }

  ngOnInit() {
    this.weatherService.currentWeather.subscribe(data => (this.current = data));

  }
ngAfterContentChecked() {
  // console.log(this.current);
}
getOrdinal(date: number) {
  const n = new Date(date).getDate();
  return n > 0
    ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
    : '';
}

}

