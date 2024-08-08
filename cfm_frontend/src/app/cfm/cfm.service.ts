import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class CfmService {
    apiUrl = environment.apiUrl;
    private httpClient = inject(HttpClient);
    
    getGroups(): Observable<any>{
        return this.httpClient.get(this.apiUrl + 'cfm/groups/');
    }
}