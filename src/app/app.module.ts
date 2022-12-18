import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InteresesComponent } from './componentes/intereses/intereses.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        InteresesComponent,
        EncabezadoComponent,
        AcercaDeComponent,
        EducacionComponent,
        ExperienciaComponent,
        TecnologiasComponent,
        ProyectosComponent,
        ContactoComponent,
        SkillsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ]
})
export class AppModule { }
