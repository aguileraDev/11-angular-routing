import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IMenu } from '@interfaces/menu.interface';
import { LinkComponent } from "../../../../shared/link/link.component";

@Component({
  selector: 'app-card-menu',
  imports: [CommonModule, LinkComponent],
  templateUrl: './card-menu.component.html',
  styleUrl: './card-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardMenuComponent {

  @Input() menu: IMenu = {} as IMenu;
}
