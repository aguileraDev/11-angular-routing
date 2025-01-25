import { CommonModule } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Link } from '@interfaces/link.interface';
import { LinkComponent } from "../link/link.component";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, LinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {

  links: Link[] =[
    {
      text:'inicio',
      url:'',
      aria:''
    },
    {
      text:'clientes',
      url:'/dashboard/customer',
      aria:''
    },
    {
      text:'menus',
      url:'',
      aria:''
    },
    {
      text:'platos',
      url:'',
      aria:''
    },
    {
      text:'ordenes',
      url:'',
      aria:''
    }

  ]

 }
