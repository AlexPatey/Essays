import { Component } from '@angular/core';
import { NgtCanvas, extend } from 'angular-three';
import { SceneGraph } from '../scenegraph/scenegraph.component';
import * as THREE from 'three';

extend(THREE);

@Component({
  selector: 'app-home',
  imports: [
    NgtCanvas
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  protected sceneGraph = SceneGraph;
}
