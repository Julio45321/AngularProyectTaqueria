import { TaqueriaComponent } from './componentes/taqueria/taqueria.component';
import { TaqueriasComponent } from './componentes/taquerias/taquerias.component';
import { HomeComponent } from './componentes/home/home.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'taquerias',component:TaqueriasComponent},
  {path:'taqueria/:id',component:TaqueriaComponent,},
  {path:'buscar/:termino',component:BuscarComponent},
  {path: 'home',component:HomeComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
