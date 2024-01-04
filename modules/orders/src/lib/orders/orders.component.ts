import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedUiComponent } from '@ecommerce/shared-ui';

@Component({
  selector: 'ecommerce-orders',
  standalone: true,
  imports: [CommonModule, SharedUiComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {}
