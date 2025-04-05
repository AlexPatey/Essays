import { Routes } from '@angular/router';
import {GenesisComponent} from './genesis/genesis.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'genesis', component: GenesisComponent},
];
