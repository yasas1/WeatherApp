export class Weather {

    id :number = 0;
    name :string = "";
    datetime = new Date();
    date :string = "";
    time :string = "";
    sunset_time  :string = "";
    sunrise_time :string = "";
    temp  :string = "";
    temp_min :string = "";
    temp_max  :string = "";
    pressure  :string = "";
    humidity  :string = "";
    visibility  :string ="";
    description :string = "";
    icon  :string = "";
    country :string = "";
    windSpeed:string = "";
    windDeg:string = "";
    iconUrl:string = "";
    contentColor:string = "";
    createDateTime:number = new Date().getTime();

}