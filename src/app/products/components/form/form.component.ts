import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Producto } from '../../models/Producto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {
  // Atributos con los campos del formulario
  product: Producto = new Producto();

  // Objeto que entra al componente padre
  @Input() producto: Producto = {
    id: 0,
    nombre: "",
    descripcion: "",
    precio: 0
  };

  // Objeto de salida al componente padre
  @Output() newProductoEvent = new EventEmitter<Producto>();

  // Método onSubmit
  onSubmit() {
    this.newProductoEvent.emit(this.product);
  }

  // Actualizar 'product' cuando 'producto' cambia
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['producto'] && changes['producto'].currentValue) {
      this.product = { ...changes['producto'].currentValue };
    }
  }
}

