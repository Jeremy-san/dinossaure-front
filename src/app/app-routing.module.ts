import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinoComponent } from './composants/dino/dino.component';
import { HomeComponent } from './composants/home/home.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
  { path: 'dinossaure', component: DinoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
