import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div style="background-color: #2B313D; height:100%;">
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <!--<li><a [routerLink]="['/products']">Driver and Rating List</a></li>-->
                </ul>
            </div>
        </nav>
        <div class='container' style="background-color: #3594D5">
            <router-outlet></router-outlet>
        </div>
     </div>
    `
})
export class AppComponent {
  pageTitle: string = 'JOSS';
}
