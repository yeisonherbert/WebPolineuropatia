import {Component, OnInit} from '@angular/core';
import {PolineService} from "../service/poline.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  resultado = "";

  constructor(public servicePoline: PolineService) {
  }

  ngOnInit(): void {

  }
  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm) {
    this.servicePoline.getPoline(form.value)
    // this.resultado = "NO";
  }


}
