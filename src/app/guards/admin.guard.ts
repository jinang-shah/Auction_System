import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable, map, catchError, of } from "rxjs";
import { LoginService } from "../services/homepage/login.service";

@Injectable({
  providedIn: "root",
})
export class AdminGuard implements CanActivate {
  constructor(private loginService: LoginService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.loginService.user.pipe(
      map(
        (user: any) => {
          if (user && user.isAdmin) {
            return true;
          }
          alert("You are not Admin");
          return false;
        },
        catchError((err) => {
          console.log(err);
          return of(false);
        })
      )
    );
  }
}
