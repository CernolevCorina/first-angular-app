import {Component} from "@angular/core";
import {ButtonComponent} from "../../button/button.component";
import navbarItems from './data/navbar-items';
import {NavbarItem} from "./iterfaces/navbar-item";
import {NgForOf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [
    ButtonComponent,
    NgForOf,
    MatIcon
  ],
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent{
  navbarItems: NavbarItem[] = navbarItems;
}
