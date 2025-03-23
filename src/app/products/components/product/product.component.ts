import {Component} from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  //Constructor
  constructor(private service: ProductService) {

  }
}
