import { CommonModule } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICustomer } from '@interfaces/customer.interface';
import { IDish } from '@interfaces/dish.interface';

@Component({
  selector: 'app-container-card',
  imports: [CommonModule],
  templateUrl: './container-card.component.html',
  styleUrl: './container-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerCardComponent {

  @Input() customer: ICustomer = {} as ICustomer;
  @Input() dish: IDish = {} as IDish;

  @Input({transform: booleanAttribute}) isCustomer: boolean = false;
  @Input({transform: booleanAttribute}) isDishes: boolean = false;
 }
