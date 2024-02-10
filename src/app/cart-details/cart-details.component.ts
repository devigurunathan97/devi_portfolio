import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PortfolioService } from '../portfolio.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-cart-details',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProductComponent],
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.scss'
})
export class CartDetailsComponent {
  products: any;
  constructor(private api: PortfolioService) { }
  ngOnInit(): void {
    this.api.products().subscribe((data: any) => {
      this.products = data.data;
    })
  }
}
