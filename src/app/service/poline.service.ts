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

  constructor(private http: HttpClient) {
    this.formData = {

      // Edad: 58,
      // Genero: 0,
      // flgCovid: 0,
      // UCI: 0,
      // flgDiabetes: 0,
      // TipoExtremidad: 0,
      // Latencia_1_der: 3.5,
      // Amplitud_1_der: 13.4,
      // Latencia_2_der: 7.9,
      // Amplitud_2_der: 5.8,
      // Latencia_1_izq: 3.3,
      // Amplitud_1_izq: 8.6,
      // Latencia_2_izq: 7,
      // Amplitud_2_izq: 8.5,
      // Amp_Needle_1_der: 1,
      // Amp_Needle_2_der: 1,
      // Amp_Needle_3_der: 1,
      // Amp_Needle_1_izq: 1,
      // Amp_Needle_2_izq: 1,
      // Amp_Needle_3_izq: 1

      Edad: 58,
      Genero: 1,
      flgCovid: 1,
      UCI: 0,
      flgDiabetes: 0,
      TipoExtremidad: 0,
      Latencia_1_der: 4.5,
      Amplitud_1_der: 0.9,
      Latencia_2_der: 13.9,
      Amplitud_2_der: 0.7,
      Latencia_1_izq: 4.7,
      Amplitud_1_izq: 0.9,
      Latencia_2_izq: 13.8,
      Amplitud_2_izq: 0.7,
      Amp_Needle_1_der: 3,
      Amp_Needle_2_der: 3,
      Amp_Needle_3_der: 3,
      Amp_Needle_1_izq: 2,
      Amp_Needle_2_izq: 3,
      Amp_Needle_3_izq: 3,
    }
  }


  getPoline(formData: Polineuropatia) {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.rootURL + '/Polineuropatia/Consultar', formData, {headers: reqHeader});
  }

  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  // tslint:disable-next-line:typedef
  filter() {
    this._listners.next();
  }
}
