import {Component, Input} from "@angular/core";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'custom-button',
  standalone: true,
  templateUrl: './button.component.html',
  imports: [
    MatButton
  ],
  styleUrl: './button.component.scss'
})

export class ButtonComponent{
  @Input() label: string=''
  @Input() color: string='primary'
}
