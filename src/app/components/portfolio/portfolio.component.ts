import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  persona: Persona[] = [];
  constructor(public personaService: PortfolioService) { }

  ngOnInit(): void {
    this.personaService.lista().subscribe(data => {this.persona = data})
  }
}
