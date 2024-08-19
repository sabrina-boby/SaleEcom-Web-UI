import {Component} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  myData: any = {
    bg: 'white',
    color: '#1B9AAA',
  };
}
