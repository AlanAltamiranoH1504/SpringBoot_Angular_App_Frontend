import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Atributos
  title = 'Hola Mundo Angular';
  enable: boolean = true;
  cursos: string[] = [
    'Angular',
    'React',
    'SpringBoot',
    'NodeJs/Express',
    'Php',
    'Laravel',
    'Javascript',
    'Java',
    'Bootstrap',
    'Git'
  ];

  //Metodos del componente
  setEnabled(): void {
    this.enable = !this.enable;
  }
}
