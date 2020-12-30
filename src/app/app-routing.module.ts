import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { QrGuard } from './guards/qr.guard';

/*
{
  path: 'qr',
  loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule),
  canLoad: [ AuthGuardGuard ]
},
*/

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canLoad: [ AuthGuardGuard ]
  },
  {
    path: 'testimonios',
    loadChildren: () => import('./pages/testimonios/testimonios.module').then( m => m.TestimoniosPageModule),
    canLoad: [ AuthGuardGuard ]
  },
  {
    path: 'devociones',
    loadChildren: () => import('./pages/devociones/devociones.module').then( m => m.DevocionesPageModule),
    canLoad: [ AuthGuardGuard ]
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule),
    canLoad: [ AuthGuardGuard ]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canLoad: [ AuthGuardGuard ]
  },
  {
    path: 'contenidos',
    loadChildren: () => import('./pages/contenidos/contenidos.module').then( m => m.ContenidosPageModule),
    canLoad: [ AuthGuardGuard ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
