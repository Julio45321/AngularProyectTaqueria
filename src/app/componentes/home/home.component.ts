import { AgmCoreModule } from '@agm/core';
import { Component, OnInit } from '@angular/core';

declare const L:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title='locationApp'

  videos = [
    {
      video:'nqXc8hYJbd8'
    },
    {
      video: 'KS6zU4RE6dY'
    },
    {
      video:'AZT7D9elPhg'
    }

  ]

  ngOnInit(): void {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.body.appendChild(tag);


    if(!navigator.geolocation){
      console.log('localizacion no soportada')
    }
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(`lat ${position.coords.latitude},lon: ${position.coords.longitude}`);
      let map = L.map('map').setView([position.coords.latitude,position.coords.longitude ], 1);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([19.8694216, -97.5653502]).addTo(map);
    })
    this.watchPosition()
  }

  watchPosition(){
    let deslat =0
    let deslon =0

    let id = navigator.geolocation.watchPosition(
      (position)=> {
        console.log(`lat: ${position.coords.latitude},lon: ${position.coords.longitude}`);
        if(position.coords.latitude===deslat){
          navigator.geolocation.clearWatch(id)
        }
      },
      (err)=>{
        console.log(err);

      }
    )
  }

  }


