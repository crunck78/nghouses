import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(private http: HttpClient) { }

  get(){
    this.http.get('http://localhost:3000/houses')
        // .then((response) => response.json())
        // .then((houses) => {
        //     let incomplete = getIncomplete(houses);
        //     renderResult(incomplete, '#incomplete');
        //     let target = {
        //         lat: 52.5418739,
        //         lon: 13.4057378
        //     };
        //     let closestResult = getClosest(houses, target);
        //     renderResult(closestResult, '#closest');
        // })
        // .catch((error) => {

        // });
  }
}
