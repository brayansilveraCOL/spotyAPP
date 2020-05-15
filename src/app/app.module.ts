import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
//Routes
import {ROUTES} from './app.routes';
//Service


//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/search/search.component';
import { ArtistaComponent } from './Components/artista/artista.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { ImagenotfoundPipe } from './pipes/imagenotfound.pipe';
import {DomseguroPipe} from './pipes/domseguro.pipe';
import { CardComponentComponent } from './Components/shared/card-component/card-component.component';
import { LoadingComponent } from './Components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    ImagenotfoundPipe,
    CardComponentComponent,
    LoadingComponent,
    DomseguroPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash:true})
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
