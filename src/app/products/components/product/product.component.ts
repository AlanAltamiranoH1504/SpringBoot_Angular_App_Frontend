import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Producto} from '../../models/Producto';
import {FormComponent} from '../form/form.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormComponent],
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

  //Metodo addProducto
  addProducto(producto: Producto): void{
    this.productos.push(producto);
    // this.productos = [... this.productos, {... producto}];
  }
}
