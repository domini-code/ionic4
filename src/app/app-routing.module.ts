import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pelis', pathMatch: 'full' },
  { path: 'pelis', loadChildren: './pages/pelis/pelis.module#PelisPageModule' },
  { path: 'peli/:id', loadChildren: './pages/peli-details/peli-details.module#PeliDetailsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
