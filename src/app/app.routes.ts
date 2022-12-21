import { RouterModule,Routes} from "@angular/router";
import { BuscarComponent } from "./componentes/buscar/buscar.component";
import { TaqueriaComponent } from "./componentes/taqueria/taqueria.component";
import { TaqueriasComponent } from "./componentes/taquerias/taquerias.component";
import { HomeComponent } from "./componentes/home/home.component";




const APP_ROUTES:Routes=[
  {path:'home',component:HomeComponent},
  {path:'taquerias',component:TaqueriasComponent},
  {path:'taqueria/:id',component:TaqueriaComponent},
  {path:'buscar/:termino',component:BuscarComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true})
