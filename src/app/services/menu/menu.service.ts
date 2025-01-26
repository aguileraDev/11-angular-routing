import { inject, Injectable } from '@angular/core';
import { FindAllMenusService } from './find-all-menus.service';
import { Observable } from 'rxjs';
import { IMenu } from '@interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  findAllMenusService = inject(FindAllMenusService);

  constructor() { }

  findAll(): Observable<IMenu[]>{
    return this.findAllMenusService.execute();
  }

}
