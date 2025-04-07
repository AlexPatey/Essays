import { Component } from '@angular/core';
import { NgtCanvas, extend } from 'angular-three';
import { SceneGraph } from '../scenegraph/scenegraph.component';
import { Mesh, BoxGeometry } from 'three';

extend({Mesh, BoxGeometry, MyMesh: Mesh});

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
