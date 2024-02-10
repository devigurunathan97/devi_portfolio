import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent {

}
