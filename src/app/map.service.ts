import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  layers = []

  constructor() { }

  getLayers() {
    return this.layers
  }
  setLayers(layer) {
    this.layers.push(layer)
  }
}
