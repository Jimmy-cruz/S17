import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [
  // importando rutas
  {path:'', component:HomeComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'**', pathMatch:'full', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
