import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TweetsService {

  private getTweetsUrl = 'api/getTweets/';

  constructor(private http: HttpClient) { }
  getTweets(textToSearch: string): any {
    return this.http.get(this.getTweetsUrl + textToSearch)
      .map( data => data['data']);
  }
}
