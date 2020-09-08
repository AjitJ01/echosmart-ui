import { Component } from '@angular/core';
//Sample123
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'echosmart-ui';


  istrue = false;
  onClick() {
    this.istrue = true
  }
}
