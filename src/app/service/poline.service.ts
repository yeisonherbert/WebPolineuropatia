import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Polineuropatia} from "../model/polineuropatia.model";
import {Resultado} from "../model/resultado.model";
import {map} from "rxjs/operators";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PolineService {
  rootURL = environment.baseUrl;
  formData: Polineuropatia;
  private _listners = new Subject<any>();

  constructor() {
    this.formData = {
      Edad: 1,
      Genero: 1,
      flgCovid: 1,
      UCI: 1,
      flgDiabetes: 1,
      TipoExtremidad: 1,
      Latencia_1_der: 1,
      Amplitud_1_der: 1,
      Latencia_2_der: 1,
      Amplitud_2_der: 1,
      Latencia_1_izq: 1,
      Amplitud_1_izq: 1,
      Latencia_2_izq: 1,
      Amplitud_2_izq: 1,
      Amp_Needle_1_der: 1,
      Amp_Needle_2_der: 1,
      Amp_Needle_3_der: 1,
      Amp_Needle_1_izq: 1,
      Amp_Needle_2_izq: 1,
      Amp_Needle_3_izq: 1
    }
  }


  getPoline(formData: Polineuropatia) {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    //
    // return this.http.get('/Polineuropatia/Consultar?Edad=58&Genero=1&flgCovid=1&UCI=0&flgDiabetes=0&TipoExtremidad=0&Latencia_1_der=4.5&Amplitud_1_der=0.9&Latencia_2_der=13.9&Amplitud_2_der=0.7&Latencia_1_izq=4.7&Amplitud_1_izq=0.9&Latencia_2_izq=13.8&Amplitud_2_izq=0.7&Amp_Needle_1_der=3&Amp_Needle_2_der=3&Amp_Needle_3_der=3&Amp_Needle_1_izq=2&Amp_Needle_2_izq=3&Amp_Needle_3_izq=3').subscribe(data => {
    //     // @ts-ignore
    //     this.rpta = data.resultado;
    //   },
    //   (err: HttpErrorResponse) => {
    //     if (err.error instanceof Error) {
    //       console.log('An error occurred:', err.error.message);
    //     } else {
    //       console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
    //     }
    //   })

  }

  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  // tslint:disable-next-line:typedef
  filter() {
    this._listners.next();
  }
}
