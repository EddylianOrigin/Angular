import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<any> {
    return this.http.get<any>(environment.url, {
      headers: new HttpHeaders()
       // .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIKeyHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIHostHeaderValue),
      params: new HttpParams()
        .set('city',cityName)

    })
  }

}
/**
 * getWeatherData(): Observable<any> {
    return this.http.get<any>(environment.url);
}
 */
