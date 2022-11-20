import { Component, OnInit } from '@angular/core';
import { HousesService } from './services/houses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private houses: HousesService){}
  ngOnInit(): void {
    this.houses.get();
  }
  title = 'nghouses';
}
