import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get(environment.baseURL)
      .pipe(
        tap(console.log)
      )
  }

}
