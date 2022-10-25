import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  persona: Persona[] = [];

  constructor(public personaService: PortfolioService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarPersona(): void {
    this.personaService.lista().subscribe(data => {this.persona = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.personaService.delete(id).subscribe(data =>{
        this.cargarPersona();
      }, err =>{
        alert("No se puede eliminar el registro.");
      })
    }
  }
}
