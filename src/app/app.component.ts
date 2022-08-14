import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as L from 'leaflet'
import { MapService } from './map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  map: any;
  layers: any
  constructor(private http: HttpClient, private readonly mapService: MapService) { }

  ngOnInit(): void {
    this.map = L.map("map").setView([17.385044, 78.486671], 5)
    this.map.attributionControl.setPrefix('Realsoft Advanced Applications - Al Khwarizmi');
    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    }).addTo(this.map);

    const kh = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}")

    const layer = {
      'open street map': osm,
      kh
    }
    L.control.layers(layer).addTo(this.map)


    const latlngs = [
      [17.385044, 78.486671],
      [16.506174, 80.648015],
      [17.686816, 83.218482]
    ];
    const latlngs2 = [
      [16.385044, 77.486671],
      [15.506174, 79.648015],
      [37.0902, 95.7129]
    ];

    const polygonPoints = [
      [37.786617, -122.404654],
      [37.797843, -122.407057],
      [37.798962, -122.398260],
      [37.794299, -122.395234]
    ];
    const polygonPoints2 = [
      [21.754398, 48.613981],
      [47.853717, 7.805501],
      [42.920229, 63.037668],

    ];



    const polygon = L.polygon(latlngs as any, { color: 'purple', opacity: 1 })
    const polygon2 = L.polygon(latlngs2 as any, { color: 'purple', opacity: 1 })
    const polygon3 = L.polygon(polygonPoints as any, { color: 'purple', opacity: 1 })
    const polygon4 = L.polygon(polygonPoints2 as any, { color: 'purple', opacity: 1 })
    const layers = [polygon, polygon2, polygon3, polygon4]
    const featureGroup = L.featureGroup(layers);
    featureGroup.addTo(this.map);

    this.mapService.setLayers(polygon)
    this.mapService.setLayers(polygon2)
    this.mapService.setLayers(polygon3)
    this.mapService.setLayers(polygon4)

  }


}
