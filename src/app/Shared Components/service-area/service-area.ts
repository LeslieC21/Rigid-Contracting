import { Component, ViewChild } from '@angular/core';
import { CommonModule} from '@angular/common';
import { polygonHull } from 'd3-polygon';
import { GoogleMapsModule, MapMarker, MapInfoWindow } from '@angular/google-maps';


@Component({
  selector: 'app-service-area',
  imports: [GoogleMapsModule, CommonModule],
  templateUrl: './service-area.html',
  styleUrl: './service-area.css',
})
export class ServiceArea {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  selectedLocality: any = null;
  center: google.maps.LatLngLiteral = { lat: 38.1, lng: -83.7 };
    zoom = 10;
  
    localities = [
      { lat: 38.000, lng: -84.320},  // Clark Co.
      { lat: 37.829, lng: -84.071},
      { lat: 38.169, lng: -83.200}, // Rowan Co.
      { lat: 38.391, lng: -83.416},
      { lat: 37.838, lng: -83.526},  // Frenchburg
      { lat: 38.030, lng: -83.436},
      { lat: 38.182, lng: -83.980},  // Mt. Sterling
    ]
    serviceAreas = [
      { lat: 37.9708, lng: -84.1474, name: "Clark County",  description: "Full Service Coverage Area"},
      { lat: 38.2040, lng: -83.4280, name: "Rowan County", description: "Full Service Coverage Area"},
      { lat: 38.1450, lng: -83.7427, name: "Bath County", description: "Full Service Coverage Area"},
      { lat: 38.0335, lng: -83.9131, name: "Montgomery County", description: "Full Service Coverage Area"},
      { lat: 37.9414, lng: -83.5989, name: "Menifee County", description: "Full Service Coverage Area"},
    ]
  
    points: [number, number][] = this.localities.map(l => [l.lng, l.lat]);
    hull = polygonHull(this.points);
  
    boundaryPath = this.hull!.map(([lng, lat]: [number, number]) => ({ lat, lng }));
    polygonOptions: google.maps.PolygonOptions = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.15,
    };

    openInfoWindow(marker: MapMarker, locality: any) {
      this.selectedLocality = locality;
      this.infoWindow.open(marker);
    }
}
