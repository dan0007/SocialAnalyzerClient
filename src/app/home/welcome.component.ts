import {Component, OnInit} from '@angular/core';
import {WelcomeService} from './welcome.service';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  pageTitle: string = 'JOSS';
  highestTweet;
  lowestTweet;
  averageSentimentOfTruckDriving;
  averageSentimentOfJBHunt;
  averageSentimentOfJBHunt360;

  constructor(private welcomeService: WelcomeService) {
  }

  ngOnInit() {
    this.welcomeService.getHighestRatedTweet().subscribe(
      data => {
        this.highestTweet = data;
      });
    this.welcomeService.getLowestRatedTweet().subscribe(
      data => {
        this.lowestTweet = data;
      });
    this.welcomeService.getAverageSentiment('truckdriving').subscribe(
      data => {
        this.averageSentimentOfTruckDriving = data;
      });
    this.welcomeService.getAverageSentiment('JBHunt').subscribe(
      data => {
        this.averageSentimentOfJBHunt = data;
      });
    this.welcomeService.getAverageSentiment('JBHunt360').subscribe(
      data => {
        this.averageSentimentOfJBHunt360 = data;
      });
  }
}
