import { Component } from '@angular/core';
import { HeaderComponent } from '../../partial/header/header.component';
import { FooterComponent } from '../../partial/footer/footer.component';

@Component({
  selector: 'app-calculos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './calculos.component.html',
  styleUrl: './calculos.component.css'
})
export class CalculosComponent {

}
