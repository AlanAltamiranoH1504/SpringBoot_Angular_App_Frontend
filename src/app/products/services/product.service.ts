import {Injectable} from '@angular/core';
import {Producto} from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //Datos de ejemplo
  private productos: Producto[] = [
    {
      id: 1,
      nombre: "Alexa Echo V5",
      descripcion: "Asistene",
      precio: 850
    },
    {
      id: 2,
      nombre: "Laptop Asus",
      descripcion: "32 Gb de RAM",
      precio: 21000
    },
    {
      id: 2,
      nombre: "Laptop Asus",
      descripcion: "24 Gb de RAM",
      precio: 16000
    },
  ];

  constructor() {
  }
}
