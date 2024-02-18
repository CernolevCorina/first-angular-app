import { Component } from '@angular/core';
import footerItems from './data/footer-items'
import {FooterItem} from "./iterfaces/footer-item";
import {ButtonComponent} from "../../button/button.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    ButtonComponent,
    NgForOf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerItems: FooterItem[][] = footerItems;
}
