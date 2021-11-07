import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  URL_API: string = environment.URL_API;

  constructor(private _httpClient: HttpClient) { }

  public getAllImages(): Observable<Array<any>> {
    let url = this.URL_API;
    return this._httpClient.get<Array<any>>(url);
  }

}
