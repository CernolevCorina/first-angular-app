import {Component} from "@angular/core";
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "../../components/base/layout/navbar/navbar.component";
import {FooterComponent} from "../../components/base/layout/footer/footer.component";

@Component({
  selector: 'default-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})

export class DefaultLayoutComponent {}
