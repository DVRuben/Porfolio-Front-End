import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombreSkill: string = "";
  imgSkill: string = "";

  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombreSkill, this.imgSkill);
    this.skillS.save(skill).subscribe(data =>{
      alert("Registro guardado correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("No se pudo guardar el registro.");
      this.router.navigate(['']);
    })
  }
}
