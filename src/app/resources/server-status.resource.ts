import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Response } from "../Response";
import { environment } from "./environment";

@Injectable({
    providedIn: 'root'
})
export class ServerStatus {
    private serverApi = `${environment.host}/server/status`;

    constructor(private http: HttpClient) { }

    public getServerStatus(): Observable<Response> {
        return this.http.get<Response>(this.serverApi);
    }
}