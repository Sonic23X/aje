import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'testimonios',
    loadChildren: () => import('./pages/testimonios/testimonios.module').then( m => m.TestimoniosPageModule)
  },
  {
    path: 'devociones',
    loadChildren: () => import('./pages/devociones/devociones.module').then( m => m.DevocionesPageModule)
  },
  {
    path: 'devocion-detalles',
    loadChildren: () => import('./pages/devocion-detalles/devocion-detalles.module').then( m => m.DevocionDetallesPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
