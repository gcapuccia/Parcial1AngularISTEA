import { Component } from '@angular/core';
import { LoginService } from '../../servicios/login.service';
import { MonedasService } from 'src/app/servicios/monedas.service';
import { Moneda } from 'src/app/models/moneda';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  usuario:string = '';

  allmoneda:Moneda[] = [];

  filtromoneda:Moneda[] = [];

  MostrarTabla:boolean = false;

  Mostrarcompleta:boolean =true;

  constructor(public LoginService: LoginService, public MonedasService: MonedasService){
    this.usuario = this.LoginService.usuarioLogeado;

    this.allmoneda = MonedasService.getMonedas();
    console.log(this.allmoneda);

  }
  

  MostrarT(){
    return this.MostrarTabla = true;
  }

  filtroporcountry(country:string){
    this.Mostrarcompleta = false;

    this.filtromoneda = this.allmoneda.filter(x=> x.country == country);
    return this.filtromoneda;
  }


}
