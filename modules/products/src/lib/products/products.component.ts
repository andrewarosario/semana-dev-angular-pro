import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedUiComponent } from '@ecommerce/shared-ui';

@Component({
  selector: 'ecommerce-products',
  standalone: true,
  imports: [CommonModule, SharedUiComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
