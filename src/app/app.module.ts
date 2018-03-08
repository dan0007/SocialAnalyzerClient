import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { WelcomeService} from './home/welcome.service';
import { TweetsComponent } from './tweets/tweets.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TweetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent },
      { path: 'tweets', component: TweetsComponent},
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  providers: [WelcomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
