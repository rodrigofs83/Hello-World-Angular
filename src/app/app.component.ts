import { Component } from '@angular/core';
import {Usuario} from '../shared/model/usuario'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjPweb';
  usuario :Usuario;
  constructor(){
    this.usuario = new Usuario();
    this.usuario.nome = 'Rodrigo Francisco da silva';


  }
}
