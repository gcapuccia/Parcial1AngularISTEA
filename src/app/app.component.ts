import { Component } from '@angular/core';
import { LoginService } from './servicios/login.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parcial1CapucciatiGuido';

  constructor( public LoginService: LoginService){

  }



}
