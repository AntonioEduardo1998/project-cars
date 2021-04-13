import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { MostruarioComponent } from './pages/mostruario/mostruario.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ModelWrapperComponent } from './components/model/model-wrapper/model-wrapper.component';
import { ModelSectionComponent } from './components/model/model-section/model-section.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';

import { FooterComponent } from './components/footer/footer.component';
import { CarrosService } from './services/carros.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    ContatoComponent,
    MostruarioComponent,
    SobreComponent,
    ModelWrapperComponent,
    ModelSectionComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    CarrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
