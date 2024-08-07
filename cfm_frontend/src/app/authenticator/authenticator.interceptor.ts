import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private cookieService: CookieService) { }
    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

        const is_authenticated = this.cookieService.get("is_authenticated");
        if (!Boolean(is_authenticated)) {
            return next.handle(req);
        }

        const access_token = this.cookieService.get("id_token");

        if (access_token) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + access_token)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}