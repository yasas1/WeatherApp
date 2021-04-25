import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '22a9305f1ec522047138a3a2193e7c0c';
  url:string;

  constructor(private http:HttpClient) { 
    this.url='http://api.openweathermap.org/data/2.5/group?id=';
  }

  getWeatherForOneCity(cityCode:string){
    return this.http.get(this.url+cityCode+'&units=metric&appid='+this.apiKey);
  }

  getWeatherForFiveCity(cityCodeList:string[]){

    
      return this.http.get(
        this.url+cityCodeList[0]+','
        +cityCodeList[1]+','
        +cityCodeList[2]+','
        +cityCodeList[3]+','
        +cityCodeList[4]
        +'&units=metric&appid='+this.apiKey);
    
    
  }

}
