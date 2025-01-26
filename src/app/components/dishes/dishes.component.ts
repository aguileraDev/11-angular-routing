import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { DishesService } from '@services/dishes/dishes.service';
import { ContainerComponent } from "../../shared/container/container.component";
import { BehaviorSubject } from 'rxjs';
import { IDish } from '@interfaces/dish.interface';

@Component({
  selector: 'app-dishes',
  imports: [CommonModule, ContainerComponent],
  templateUrl: './dishes.component.html',
  styleUrl: './dishes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DishesComponent implements OnInit {

  dishesService = inject(DishesService);
  header: string[] = ['id', 'nombre', 'categoria', 'precio'];

  dishes = new BehaviorSubject<IDish[]>([]);

  ngOnInit(): void {
    this.dishesService.findAll().subscribe(data => this.dishes.next(data));
  }

}
