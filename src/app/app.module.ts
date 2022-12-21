import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { FormsModule } from '@angular/forms';
import { TaqueriasComponent } from './componentes/taquerias/taquerias.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { TaqueriaComponent } from './componentes/taqueria/taqueria.component';
import { MapComponent } from './componentes/map/map.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './compartidos/navbar/navbar.component';
import { TarjetaComponent } from './componentes/tarjeta/tarjeta.component';
import { YoutubePipe } from './pipe/youtube.pipe';
import { NgxYoutubePlayerModule } from '@hercilio/ngx-youtube-player';
import { AgmCoreModule } from '@agm/core';
import { TwitterComponent } from './componentes/twitter/twitter.component';


@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    TaqueriasComponent,
    TaqueriaComponent,
    MapComponent,
    HomeComponent,
    NavbarComponent,
    TarjetaComponent,
    YoutubePipe,
    TwitterComponent,

  ],
  imports: [
    AgmCoreModule.forRoot({apiKey:'AIzaSyDVk2CLSFcYJFP1AxhBZfz-Z2v7V_mCcb0'}),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxYoutubePlayerModule,
    NgxTwitterTimelineModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}


export class AccountModule {
}
