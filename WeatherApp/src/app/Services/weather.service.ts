import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

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
