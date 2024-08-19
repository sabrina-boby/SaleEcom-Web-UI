import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  standalone: true,
  imports:[CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-choose-your-own-template',
  templateUrl: './choose-your-own-template.component.html',
  styleUrl: './choose-your-own-template.component.scss'
})
export class ChooseYourOwnTemplateComponent {
 
}
