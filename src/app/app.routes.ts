import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { DescriptionComponent } from './description/description.component';

export const routes: Routes = [
    { path: '', component: CartDetailsComponent },
    { path: 'login', component: ModalPopupComponent, title: 'Login Page' },
    { path: 'description/:id', component: DescriptionComponent, title: 'Product Description' },
];
