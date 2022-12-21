import { Component, OnInit } from '@angular/core';
import { TaqueriasService } from 'src/app/servicios/taquerias.service';
import { Taquerias } from 'src/app/model/Taquerias';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-taquerias',
  templateUrl: './taquerias.component.html',
  styleUrls: ['./taquerias.component.css']
})
export class TaqueriasComponent implements OnInit {

  taquerias:Taquerias[]=[]
  constructor(private servicio:TaqueriasService
  ) { }

  ngOnInit(): void {
    this.servicio.mostrarTaqueria().subscribe(
      res=>{
        this.taquerias=res
      }
    )
  }

  borrar(taqueria:Taquerias,id:number){
    Swal.fire({
      title:'Borrar usuario',
      text:`¿Estas seguro que deseas borrar al usuario ${taqueria.nombre}`,
      icon:'question',
      showCancelButton:true,
      showConfirmButton:true,
    }).then((resp:any)=>{
      if(resp.value){
        this.servicio.borrarTaqueria(taqueria.id).subscribe()
        this.taquerias.splice(id,1)
      }
    })

  }
}
