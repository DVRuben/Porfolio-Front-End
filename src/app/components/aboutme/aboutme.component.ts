import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Skill } from 'src/app/model/skill';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { SkillService } from 'src/app/servicios/skill.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  educacion: Educacion[] = [];
  skill: Skill[] = [];
  
  constructor(private educacionS: EducacionService, private skillS: SkillService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.educacionS.lista().subscribe(data =>{
      this.educacion = data;
    })
  }

  cargarSkill(): void{
    this.skillS.lista().subscribe(data =>{
      this.skill = data;
    })
  }

  delete(id?: number){
    if(id != undefined){
      this.educacionS.delete(id).subscribe(data =>{
        this.cargarEducacion();
      }, err =>{
        alert("No se puede eliminar el registro.");
      })
    }
  }

  deleteSkill(id?: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(data =>{
        this.cargarSkill();
      }, err =>{
        alert("No se puede eliminar el registro.");
      })
    }
  }
}
