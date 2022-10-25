import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor-service';
import { NewExperienciaComponent } from './components/services/new-experiencia.component';
import { EditExperienciaComponent } from './components/services/edit-experiencia.component';
import { NewEducacionComponent } from './components/aboutme/new-educacion.component';
import { EditEducacionComponent } from './components/aboutme/edit-educacion.component';
import { NewSkillComponent } from './components/aboutme/new-skill.component';
import { EditSkillComponent } from './components/aboutme/edit-skill.component';
import { EditPersonaComponent } from './components/navbar/edit-persona.component';
import { NewPersonaComponent } from './components/navbar/new-persona.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    AboutmeComponent,
    ServicesComponent,
    ContactComponent,
    LoginComponent,
    SkillsComponent,
    PortfolioComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewSkillComponent,
    EditSkillComponent,
    EditPersonaComponent,
    NewPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
