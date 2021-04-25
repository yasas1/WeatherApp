import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(
    private http:HttpClient,
    private weatherService:WeatherService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){

    this.getJsonData('assets/cities.json').subscribe(data => {
      this.data = data;
      console.log(data);
      this.getCitiesList();
    }); 
    
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
  

}
