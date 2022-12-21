import { Component, OnInit } from '@angular/core';
import { Taquerias } from 'src/app/model/Taquerias';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { TaqueriasService } from 'src/app/servicios/taquerias.service';

@Component({
  selector: 'app-taqueria',
  templateUrl: './taqueria.component.html',
  styleUrls: ['./taqueria.component.css']
})
export class TaqueriaComponent implements OnInit {

  taqueria:Taquerias=new Taquerias()

  constructor(
    private servicio:TaqueriasService,
    private rutaActivada:ActivatedRoute
  ) { }

  ngOnInit(): void {
    var id= this.rutaActivada.snapshot.paramMap.get('id') || "";
    if(id!== 'nuevo'){
      this.servicio.getTaqueria(id).subscribe(
        resp=>{
          this.taqueria=resp
          this.taqueria.id=id
        }
      )
    }
  }

  guardar(datos:NgForm){
    if(datos.invalid){
      console.log('formulario invalido')
      return
    }
    console.log(datos);

    let peticion:Observable<any>
    if(this.taqueria.id){
      peticion=this.servicio.actualizarTaqueria(this.taqueria)
    }else{
      peticion=this.servicio.crearTaqueria(this.taqueria)
    }

    peticion.subscribe(
      resp=>{
        console.log(resp);

      }
    )

  }

}
