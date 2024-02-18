import { Component } from '@angular/core';
import {IntroComponent} from "../../components/modules/home/intro/intro.component";
import {FactsComponent} from "../../components/modules/home/facts/facts.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IntroComponent,
    FactsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
