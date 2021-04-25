import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from 'src/app/Services/weather.service';
import { Weather } from 'src/app/Models/weather';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss']
})
export class WeatherHomeComponent implements OnInit {

  //read data from json file
  data:any; 

  //city data list from read Json data
  citylist :Array<{ CityCode: string; CityName: string; Temp: string; Status: string; }> =[];

  // string list that is contained only city codes
  cityCodeList:string[] = [];

  // The map which is included with city codes with weather data
  weatherMap = new Map<number, Weather>();

  selectedCityCode:string="";

  // Colors for weather content
  weatherContentColors = ["blue", "purple", "green","orange","red","teal","chocolate","yellow"];

  constructor(
    private http:HttpClient,
    private weatherService : WeatherService,
    @Inject(LOCALE_ID) private locale: string,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){

    this.getJsonData('assets/cities.json').subscribe(data => {
      this.data = data;
      console.log(data);
      this.getCitiesList();
      this.getWeatherData();
    }); 
    
  }

  /**
   * Get initial weather data list from weather service
   * */ 
  private getWeatherData(){
   
    this.weatherService.getWeatherForFiveCity(this.cityCodeList).subscribe((Response:any)=>{
      this.setWeatherDataList(Response.list);
    }) 
  }

  /**
   * Set initial weather data list into the Map
   * */ 
  private setWeatherDataList(data:any){

    const weatherDataList = data;

    this.weatherMap.clear();

    for(let weatherData of weatherDataList){

      let weather = new Weather();

      weather.id = weatherData.id;
      weather.name = weatherData.name; 

      let dateTime = new Date(weatherData.dt*1000 );
      weather.datetime = dateTime;
      weather.date = formatDate(dateTime, 'MMM dd', this.locale);
      weather.time = formatDate(dateTime, 'h:mm a', this.locale);
    
      let sunsetTime = new Date(weatherData.sys.sunset*1000);
      weather.sunset_time = sunsetTime.toLocaleTimeString();
      
      let sunsetRise = new Date(weatherData.sys.sunrise*1000);
      weather.sunrise_time = sunsetRise.toLocaleTimeString();

      weather.temp = weatherData.main.temp+"°c";
      weather.temp_min = weatherData.main.temp_min+"°c";
      weather.temp_max = weatherData.main.temp_max+"°c";
      weather.pressure = weatherData.main.pressure+"hPa";
      weather.humidity = weatherData.main.humidity+"%";
      weather.visibility = weatherData.visibility/1000 +"km";
      weather.description = weatherData.weather[0].description;
      weather.icon = weatherData.weather[0].icon;
      weather.iconUrl = "http://openweathermap.org/img/wn/"+weather.icon+"@2x.png"
      weather.country = weatherData.sys.country;
      weather.windSpeed = weatherData.wind.speed+"m/s";
      weather.windDeg = weatherData.wind.deg+" Degree";

      weather.createDateTime = new Date().getTime();

      this.weatherMap.set(weather.id,weather);

    }

  }

  /**
   * Adding city on click
   * */ 
  onCityAdd(){

  }


  /**
   * Extract city codes from Json data
   * */ 
  private getCitiesList(){
    if (this.data) {

      const dataList = this.data.List;

      for (let temp of dataList) {
        this.citylist.push(temp);
      }

      for (let city of this.citylist){
        this.cityCodeList.push(city.CityCode);
      }
    }
  }

  /**
   * Get Json file
   * */ 
  getJsonData(filePath: string){
    return this.http.get(filePath);
  }

  /**
   * Close weather content on click
   * */ 
  onClose(id:number){

    if( this.weatherMap.has(id) ){
      this.weatherMap.delete(id);
    }
  }

  /**
   * Add color funtion into weather content from color array
   * */ 
  weatherContentBackgroundColor(idx:number){
  
    let fromColorList = "linear-gradient(to bottom right,"+this.weatherContentColors[idx]+", #888888)";
    let defaultColor = "linear-gradient(to bottom right,navy, #888888)";

    return this.weatherContentColors.length > idx ? fromColorList: defaultColor;
    
  }
  

}
