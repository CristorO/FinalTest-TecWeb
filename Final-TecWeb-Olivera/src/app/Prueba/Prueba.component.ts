import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../Services/prueba.service';

@Component({
  selector: 'app-Prueba',
  templateUrl: './Prueba.component.html',
  styleUrls: ['./Prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor(private PruebaService: PruebaService) { }

  ngOnInit(): void {
    this.listarPrueba();
  }

  listarPrueba() {
    this.PruebaService.getPrueba().subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
  }

}
