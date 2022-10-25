import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/services/new-experiencia.component';
import { EditExperienciaComponent } from './components/services/edit-experiencia.component';
import { NewEducacionComponent } from './components/aboutme/new-educacion.component';
import { EditEducacionComponent } from './components/aboutme/edit-educacion.component';
import { EditSkillComponent } from './components/aboutme/edit-skill.component';
import { NewSkillComponent } from './components/aboutme/new-skill.component';
import { EditPersonaComponent } from './components/navbar/edit-persona.component';
import { NewPersonaComponent } from './components/navbar/new-persona.component';

const routes: Routes = [
  {path: '', component: PortfolioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'editpersona/:id', component: EditPersonaComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'nuevaskill', component: NewSkillComponent},
  {path: 'nuevapersona', component: NewPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
