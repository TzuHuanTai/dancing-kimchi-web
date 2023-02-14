import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as L from 'leaflet';
import "leaflet.markercluster";
import { PositionHintComponent } from './snack-bar/position-hint.component';

export interface Position {
  name: string;
  address: string;
  form_url?: string;
  image_url?: string;
  coordinate: [number, number];
}

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit, AfterViewInit, OnDestroy {
  map!: L.Map;
  positions: Position[] = [
    {
      name: 'Roosevelt',
      address: '849 NE 68th St, Seattle, WA 98115',
      coordinate: [47.678379479258055, -122.3176071273783],
      form_url: 'https://docs.google.com/forms/d/e/1FAIpQLSeEtzXIYPsjWsRnM5RGJ3qyQ1aqj1py7IJLL0Lrba_hrFvrNg' +
        '/viewform?embedded=true&usp=pp_url&entry.1742789131=4:00+PM+@No.168+parking+lot+near+Roosevelt+Station+(849+NE+68th+St,+Seattle,+WA+98115)',
      image_url: 'assets/positions/roosevelt_parking.jpg',
    },
    {
      name: 'Bellevue',
      address: '10116 NE 8th St, Bellevue, WA 98004',
      coordinate: [47.61788385121235, -122.20540697482997],
      form_url: 'https://docs.google.com/forms/d/e/1FAIpQLSeEtzXIYPsjWsRnM5RGJ3qyQ1aqj1py7IJLL0Lrba_hrFvrNg' +
        '/viewform?embedded=true&usp=pp_url&entry.1742789131=1:00+PM+@Under+the+clock+at+Bellevue+Bartell+(10116+NE+8th+St,+Bellevue,+WA+98004)',
      image_url: 'assets/positions/bellevue_bartell.jpg',
    },
  ];

  constructor(private snackBar: MatSnackBar) {
    const pushElement = document.getElementsByClassName('global-footer');
    (pushElement[0] as HTMLElement).style.display = 'none';
    const contentElement = document.getElementsByClassName('global-content');
    (contentElement[0] as HTMLElement).style.display = 'contents';
    window.onresize = () => this.resizeToScreen(document.getElementById('map')!);
  }

  ngOnInit(): void {
    this.resizeToScreen(document.getElementById('map')!);
  }

  ngAfterViewInit(): void {
    this.createMap();
  }

  ngOnDestroy(): void {
    const pushElement = document.getElementsByClassName('global-footer');
    (pushElement[0] as HTMLElement).style.display = '';
    const contentElement = document.getElementsByClassName('global-content');
    (contentElement[0] as HTMLElement).style.display = '';
    window.onresize = null;
    this.snackBar.dismiss();
  }

  createMap(): void {
    const accessToken: string = 'pk.eyJ1IjoicmljaGFyZHRhaSIsImEiOiJjbGQ5azM5dGEwOWtsM29xcGh5cWVzcnhpIn0.4kHu_v_Qil0HcADJv9EE-w';
    const osmUrl: string = 'https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}@2x?access_token=' + accessToken;
    const osmOption: L.TileLayerOptions = {
      maxZoom: 19,
      tileSize: 512,
      zoomOffset: -1,
      attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    };
    const osmLayer = new L.TileLayer(osmUrl, osmOption);

    this.map = L.map('map', {
      worldCopyJump: true,
      layers: [osmLayer],
      zoomControl: false,
      maxBoundsViscosity: 1.0
    });
    L.control.scale().addTo(this.map);
    this.map.setView([47.61, -122.26], 11);

    this.addMarker();
  }

  addMarker() {
    const clusterMarkers = L.markerClusterGroup({
      spiderLegPolylineOptions: {
        weight: 5, color: '#222', opacity: 0.5
      }
    });

    const customIcon = L.icon({
      iconUrl: 'assets/icons/icons8-location.gif',
      iconAnchor: [24, 48]
    });

    this.positions.forEach((v) => {
      let marker = L.marker(v.coordinate, { icon: customIcon }).addTo(clusterMarkers);
      marker.on({
        click: () => this.openSnackBar(v)
      });
    });

    clusterMarkers.addTo(this.map);
  }

  openSnackBar(position: Position): void {
    this.snackBar.openFromComponent(PositionHintComponent, {
      data: position,
    });
  }

  resizeToScreen(element: HTMLElement) {
    const wHeight = window.innerHeight;
    element.style.height = wHeight + 'px';
  }
}
