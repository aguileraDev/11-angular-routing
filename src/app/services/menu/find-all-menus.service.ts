import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IMenu } from '@interfaces/menu.interface';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FindAllMenusService {

  http = inject(HttpClient);

  constructor() { }

  execute():Observable<IMenu[]>{
    return this.http.get<IMenu[]>(`${environment.api}/menu`)
    .pipe(
      tap(console.log)
    );
  }

}
