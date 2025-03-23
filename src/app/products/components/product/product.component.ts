import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Producto} from '../../models/Producto';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  //Atributo
  productos: Producto[] = [];

  //Constructor
  constructor(private service: ProductService) {

  }

  ngOnInit() {
    this.service.findAll().subscribe(productos => {
      this.productos = productos;
    })
  }
}
