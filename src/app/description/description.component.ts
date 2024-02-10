import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PortfolioService } from '../portfolio.service';
import { ActivatedRoute } from '@angular/router';
declare var Razorpay: any;

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent {
  data: any;
  options: any;
  payment_id: any;
  order_id: any;
  user_id: any;
  constructor(private route: ActivatedRoute, private portfolio: PortfolioService) { }

  ngOnInit() {
    this.portfolio.product(this.route.snapshot.paramMap.get('id')).subscribe((res: any) => {
      this.data = res.data[0]
    })
  }

  initPay(course_id: any, price: any) {
    let bodyData = {
      amount: price
    }
    this.portfolio.create_order(bodyData).subscribe((res: any) => {
      this.order_id = res.data.id
      this.options = {
        "key": "rzp_test_JWbHgJcb9mj2BH",
        "amount": parseInt(price) * 100,
        "currency": "INR",
        "name": "Portfolio",
        "description": "Portfolio Transaction",
        "image": "assets/img/logo/logo.jpg",
        "handler": function (response: any) {
          this.order_id = response.razorpay_order_id;
          this.payment_id = response.razorpay_payment_id;
        },
        "prefill": {
          "name": "demo",
          "email": "demo@gmail.com",
          "contact": "9632587410"
        },
        "notes": {
          "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#3399cc"
        },
        "order_id": this.order_id,
      };
  
      this.options.handler = ((response: any) => {
        this.payment_id = response.razorpay_payment_id
        console.log("outer : " + this.payment_id, this.order_id, course_id, price)
        let payment_data = {
          payment_id: this.payment_id,
          order_id: this.order_id,
          course_id: course_id,
          user_id: 1, // this.user_id
          price: price
        }
        this.portfolio.payment_details(payment_data).subscribe((data: any) => {
            console.log("payment_details : " + data);
        });
      });
      var rzp1 = new Razorpay(this.options);
      rzp1.open();
    })
  }
}
