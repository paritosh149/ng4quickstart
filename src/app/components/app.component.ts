import { Component,Input } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
   // styleUrls: ['./app/components/app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  @Input()
  public inProgress: boolean = false;
}
