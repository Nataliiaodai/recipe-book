import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
// import {AuthComponent} from "./auth/auth/auth.component";


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  // { path: 'recipes', loadChildren: './recipes/recipes.module.ts#RecipesModule' }
  { path: 'recipes',
  loadChildren: () => import('./recipes/recipes.module').then(x => x.RecipesModule) },
  { path: 'shopping-list', 
  loadChildren: () => import('./shopping-list/shopping.module').then(m => m.ShoppingModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(j => j.AuthModule) }
];



@NgModule({
  // imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
