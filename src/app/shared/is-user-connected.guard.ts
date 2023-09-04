import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot } from "@angular/router";
import { TokenStorageService } from "../authentification/_services/token-storage.service";

@Injectable({
    providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate {

    constructor(private tokenStorageService: TokenStorageService,
        private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = this.tokenStorageService.getToken();
        if (token !== undefined && token !== null) {
            return true;
        } else {
            this.router.navigate(["login"]);
        }
        return false;
    }

}