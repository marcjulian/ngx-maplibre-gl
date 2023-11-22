import { Component } from '@angular/core';
import { Map } from 'maplibre-gl';
import { MatButtonModule } from '@angular/material/button';
import { ControlComponent } from '../../../../../ngx-maplibre-gl/src/lib/control/control.component';
import { MapTestingHelperDirective } from '../../helper/map-testing-helper.directive';
import { MglMapResizeDirective } from '../mgl-map-resize.directive';
import { MapComponent } from '../../../../../ngx-maplibre-gl/src/lib/map/map.component';

@Component({
    selector: 'showcase-demo',
    template: `
    <mgl-map
      [style]="
        'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'
      "
      [zoom]="[2.9]"
      [center]="[16.05, 48]"
      (mapLoad)="map = $event"
    >
      <mgl-control>
        <button
          mat-raised-button
          class="lang-button"
          (click)="changeLangTo('fr')"
        >
          French
        </button>
        <button
          mat-raised-button
          class="lang-button"
          (click)="changeLangTo('ru')"
        >
          Russian
        </button>
        <button
          mat-raised-button
          class="lang-button"
          (click)="changeLangTo('de')"
        >
          German
        </button>
        <button
          mat-raised-button
          class="lang-button"
          (click)="changeLangTo('es')"
        >
          Spanish
        </button>
      </mgl-control>
    </mgl-map>
  `,
    styleUrls: ['./examples.css'],
    preserveWhitespaces: false,
    standalone: true,
    imports: [
        MapComponent,
        MglMapResizeDirective,
        MapTestingHelperDirective,
        ControlComponent,
        MatButtonModule,
    ],
})
export class LanguageSwitchComponent {
  map: Map;

  changeLangTo(language: string) {
    if (!this.map) return;
    this.map.setLayoutProperty(
      'country_1',
      'text-field',
      '{name:' + language + '}'
    );
    this.map.setLayoutProperty(
      'country_2',
      'text-field',
      '{name:' + language + '}'
    );
    this.map.setLayoutProperty(
      'country_3',
      'text-field',
      '{name:' + language + '}'
    );
  }
}
