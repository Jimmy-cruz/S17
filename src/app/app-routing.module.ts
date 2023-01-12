import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { MisionComponent } from './pages/nosotros/mision/mision.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { VisionComponent } from './pages/nosotros/vision/vision.component';

const routes: Routes = [
  // importando rutas
  {path:'', component:HomeComponent},
  {
    path:'nosotros', component:NosotrosComponent,
    // se crean las rutas hijas
    children:[
      {path:'mision', component:MisionComponent},
      {path:'vision', component:VisionComponent}
    ]
  },
  {path:'contacto', component:ContactoComponent},
  {path:'**', pathMatch:'full', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
