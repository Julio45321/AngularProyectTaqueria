import { Taquerias } from 'src/app/model/Taquerias';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaqueriasService {
  private url ='https://database09-5d5f5-default-rtdb.firebaseio.com'
  constructor(private http:HttpClient) { }

  crearTaqueria(taqueria:Taquerias){
    return this.http.post(`${this.url}/taquerias.json`,taqueria).
    pipe(map((resp:any)=>{
      console.log(resp);
      taqueria.id=resp.name
      return taqueria

    }))
  }

  actualizarTaqueria(taqueria:Taquerias){
    const aux = {
      ...taqueria
    }
    var{id, ...auxiliar} = aux
    return this.http.put(`${this.url}/taquerias/${taqueria.id}.json`,auxiliar)

  }

  getTaqueria(id:string){
    return this.http.get(`${this.url}/taquerias/${id}.json`)
    .pipe(map((resp:any)=>{
      var taqueria:Taquerias=resp
      return taqueria
    }))
  }

  borrarTaqueria(id:string){
    return this.http.delete(`${this.url}/taquerias/${id}.json`)
  }


  mostrarTaqueria(){
    return this.http.get(`${this.url}/taquerias.json`)
    .pipe(map(this.crearArreglo))
  }


  crearArreglo(taqueriasObj:Object){
    if(taqueriasObj === null){
      return []
    }
    var ids = Object.keys(taqueriasObj)
    var datos = Object.values(taqueriasObj)
    datos.forEach((obj,i)=>{
      obj.id=ids[i]
    })
    return datos
  }









}

