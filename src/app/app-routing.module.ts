import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login',loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)},
  {path:'portal',loadChildren: () => import('./shared/home/home.module').then(m => m.HomeModule)},
  {path:'',redirectTo:'/login',pathMatch: 'full'},
  {path:'**',redirectTo:'/login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
