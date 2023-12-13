import { Injectable } from '@angular/core';
import { Moneda } from '../models/moneda';

@Injectable({
  providedIn: 'root'
})
export class MonedasService {

  constructor() { }

  allmonedas:Moneda[] = [];

  getMonedas(){
    return Monedas.slice(0);
  }

  getMonedasPais(country:string){
    return Monedas.slice(0).find(mon => mon.country == country);
  }


}
const Monedas = [
  {
    "country": "BRA",
    "client": "HCI",
    "Balance": 100033,
    "moneda": "reales", 
  },
  {
    "country": "CHL",
    "client": "I-Payout",
    "Balance": 100033,
    "moneda": "dolar", 
  },
  {
    "country": "ARG",
    "client": "Wester",
    "Balance": 1053413,
    "moneda": "pesos", 
  },
  {
    "country": "COL",
    "client": "thunes",
    "Balance": 1543033,
    "moneda": "dolar", 
  },
  {
    "country": "MEX",
    "client": "HCI",
    "Balance": 1123033,
    "moneda": "dolar", 
  },
  {
    "country": "URY",
    "client": "Nium",
    "Balance": 179033,
    "moneda": "dolar", 
  }
]

