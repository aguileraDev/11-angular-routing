import { inject, Injectable } from '@angular/core';
import { FindAllDishesService } from './find-all-dishes.service';
import { IDish } from '@interfaces/dish.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  findAllDishesService = inject(FindAllDishesService);

  constructor() { }

  findAll(): Observable<IDish[]> {
    return this.findAllDishesService.execute();
  }
}
