import { Component } from '@angular/core';
import { ModalPopupComponent } from '../modal-popup/modal-popup.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ModalPopupComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
