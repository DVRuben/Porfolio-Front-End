import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  expe: Experiencia[] = [];
  
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
      this.sExperiencia.lista().subscribe(data => {this.expe = data;})
  }

  deleteExperiencia(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data =>{
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo eliminar el registro.");
        }
      )
    }
  }
}


