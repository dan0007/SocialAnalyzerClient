import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WelcomeService {

  private highestRatedTweetUrl = '/api/getHighestRatedTweet/JBHunt';
  private lowestRatedTweetUrl = '/api/getLowestRatedTweet/JBHunt';
  private averageSentimentUrl = 'api/getSentimentAverage/';

  constructor(private http: HttpClient) { }

  getHighestRatedTweet(): any {
    return this.http.get(this.highestRatedTweetUrl)
      .map( data => data['data']);
  }

  getLowestRatedTweet(): any {
    return this.http.get(this.lowestRatedTweetUrl)
      .map( data => data['data']);
  }

  getAverageSentiment(hashtag: string) {
    return this.http.get(this.averageSentimentUrl + hashtag)
      .map( data => data['data']);
  }
}
