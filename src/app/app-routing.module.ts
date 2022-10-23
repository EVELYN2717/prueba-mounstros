import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MounstrosRazasComponent } from './pages/mounstros-razas/mounstros-razas.component';

const routes: Routes = [
  {path: '', redirectTo: '/mounstros-y-razas', pathMatch: 'full'},
  {path: 'mounstros-y-razas', component: MounstrosRazasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
