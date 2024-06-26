import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from '../../features/login/components/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'home',loadChildren: () => import('../../features/hero/hero.module').then(m => m.HeroModule)},
    {path:'test',loadChildren: () => import('../../features/login/login.module').then(m => m.LoginModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
