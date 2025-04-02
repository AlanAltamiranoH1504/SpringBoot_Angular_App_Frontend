import {Injectable} from '@angular/core';
import {Producto} from '../models/Producto';
import {map, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

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

  //Variable de ruta base
  private url:string = "http://localhost:8080/productos";

  //Inyectamos el http client
  constructor(private http:HttpClient) {
  }

  //Metodo findAll
  public findAll(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url).pipe(
      map((response: any) => response._embedded.productoes as Producto[])
    );
    // return of(this.productos)
  }

  //Metodo create
  public create(producto: Producto): Observable<Producto>{
     return this.http.post<Producto>(this.url, producto);
  }

  //Metod update
  public update(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.url}/${producto.id}`, producto);
  }
}
