import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-new-persona',
  templateUrl: './new-persona.component.html',
  styleUrls: ['./new-persona.component.css']
})
export class NewPersonaComponent implements OnInit {
  nombre: string = "";
  position: string = "";
  img: string = "";
  presentation: string = "";

  constructor(private PersonaService: PortfolioService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const persona = new Persona(this.nombre, this.position, this.img, this.presentation);
    this.PersonaService.save(persona).subscribe(data=>{
      alert("Registro guardado");
      this.router.navigate(['']);
    }, err =>{
      alert("No se ha podido guardar el registro.");
      this.router.navigate(['']);
    }
    )
  }
}
