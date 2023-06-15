import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  url = '/api/';
  
  constructor(private http: HttpClient) { }

  getPrueba() {
    return this.http.get(this.url);
  }

  // get de una prueba
  getPruebaId(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  // agregar prueba
  savePrueba(prueba: any) {
    return this.http.post(this.url, prueba);
  }

  // eliminar prueba
  deletePrueba(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  // actualizar prueba
  updatePrueba(id: string, updatedPrueba: any) {
    return this.http.put(this.url + '/' + id, updatedPrueba);
  }
}

export interface Prueba {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  email: string;
  fecha: Date;
}