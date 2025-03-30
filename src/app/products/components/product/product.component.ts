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
export class ProductComponent implements OnInit {
  //Atributos
  productos: Producto[] = [];
  productSelected: Producto = new Producto();

  //Constructor
  constructor(private service: ProductService) {

  }

  ngOnInit() {
    this.service.findAll().subscribe(productos => {
      this.productos = productos;
    })
  }

  //Metodo addProducto que agregar producto al arreglo
  addProducto(producto: Producto): void {
    if (producto.id > 0) {
      this.productos = this.productos.map((prod) => {
        if (prod.id === producto.id){
          return {... producto}
        }
        return prod;
      });
    } else {
      this.productos.push(producto);
    }


    // this.productos = [... this.productos, {... producto}];
  }

  //Metodo que llena el producto a editar
  onUpdateProducto(producto: Producto): void {
    this.productSelected = producto;
  }
}
