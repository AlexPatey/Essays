import {Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, ElementRef, viewChild, signal} from '@angular/core';
import { injectBeforeRender } from 'angular-three';
import {BoxGeometry, Mesh} from 'three';

@Component({
  templateUrl: './scenegraph.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneGraph {
  meshRef = viewChild.required<ElementRef<Mesh>>('mesh');

  hovered = signal(false);

  navigateToGenesis() {
    window.location.replace("/genesis");
  }

  constructor() {
    injectBeforeRender(() => {
      const mesh = this.meshRef().nativeElement;
      mesh.rotation.y += 0.01;
      mesh.geometry = new BoxGeometry(3, 4, .1);
    });
  }

  protected readonly Math = Math;
}
