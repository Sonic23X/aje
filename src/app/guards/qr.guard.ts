import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class QrGuard 
{
  constructor
  (
    private usuarioService: UserService,
  )
  { }

  canLoad( ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {    
    return this.usuarioService.validateQR( );
  }
}
