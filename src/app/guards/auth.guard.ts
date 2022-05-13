import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable, map, catchError, of } from "rxjs";
import { LoginService } from "../services/homepage/login.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
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
          if (user && user.name) {
            return true;
          }
          this.router.navigate(["/login"]);
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
