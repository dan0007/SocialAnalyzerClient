import { Component, OnInit } from '@angular/core';
import {TweetsService} from './tweets.service';

@Component({
  selector: 'pm-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  constructor(private tweetsService: TweetsService) { }

  ngOnInit() {

  }

}
