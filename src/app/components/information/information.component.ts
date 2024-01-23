import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  imagenUrl2: string = './assets/image2.png';
  imagenUrl3: string = './assets/image3.png';
}
