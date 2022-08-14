import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '../map.service';

@Component({
  selector: 'app-layer-opacity',
  templateUrl: './layer-opacity.component.html',
  styleUrls: ['./layer-opacity.component.css']
})
export class LayerOpacityComponent implements OnInit {
  @Input() map
  layers: any
  constructor(private readonly mapService: MapService) { }

  ngOnInit(): void {
    this.layers = this.mapService.getLayers()
    for (let i = 0; i < this.layers.length; i++) {
      this.layers[i][i] = true;
    }
    console.log(this.map)



  }
  onChangeLayerState(index) {
    for (let i = 0; i < this.layers.length; i++) {
      if (index === i) {
        this.layers[i][i] = !this.layers[i][i];

      }
    }
  }
  onChangeOpacity(i: number, value) {
    value = value / 100
    const featureGroup = L.featureGroup(this.layers)
    let counter = 0;
    featureGroup?.eachLayer((layer: any) => {
      console.log(layer, counter)
      if (i === counter) {
        layer?.setStyle({ fillOpacity: value, color: 'red' })
      }

      counter++;
    }).addTo(this.map)
    //


  }
}
