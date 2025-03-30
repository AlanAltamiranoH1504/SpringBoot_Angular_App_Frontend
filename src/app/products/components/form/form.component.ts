import {Component, EventEmitter, Output} from '@angular/core';
import {Producto} from '../../models/Producto';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'product-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  //Atributos con los campos el formulario
  product: Producto = new Producto();
  protected Producto = {
    id: 1,
    nombre: "---",
    descripcion: "---",
    precio: 0
  };

  //Objeto de salida al componente padre
  @Output() newProductoEvent = new EventEmitter();

  //Metodo onSubmit
  onSubmit() {
    this.newProductoEvent.emit(this.product)
  }
}
