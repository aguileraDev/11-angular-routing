import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { IMenu } from '@interfaces/menu.interface';
import { MenuService } from '@services/menu/menu.service';
import { CardMenuComponent } from "./components/card-menu/card-menu.component";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, CardMenuComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {

  menuService = inject(MenuService);
  menus = new BehaviorSubject<IMenu[]>([]);

  ngOnInit(): void {
    this.menuService.findAll().subscribe(data => this.menus.next(data));
  }
}
