import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ContactInterface } from "../main/models/contact.model";
import { ApiService } from "./api.service";

@Injectable()
export class ContactResolve implements Resolve<ContactInterface> {
  constructor(
    private apiService: ApiService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ContactInterface> | Promise<ContactInterface> | ContactInterface {
    return this.apiService.getContactData(+route.params['id']);
  }
}
