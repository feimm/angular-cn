// #docplaster
// #docregion
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {HeroListComponent}     from './heroes/hero-list.component';
import {HeroDetailComponent}   from './heroes/hero-detail.component';

@Component({
  selector: 'my-app',
// #docregion template
  template: `
    <h1 class="title">Component Router</h1>
    <a [routerLink]="['CrisisCenter']">Crisis Center</a>
    <a [routerLink]="['Heroes']">Heroes</a>
    <router-outlet></router-outlet>
  `,
// #enddocregion template
  directives: [ROUTER_DIRECTIVES]
})
// #docregion route-config
@RouteConfig([

/*
  // #docregion route-config-cc
  { // Crisis Center child route
    path: '/crisis-center/...',
    name: 'CrisisCenter',
    component: CrisisCenterComponent,
    useAsDefault: true
  },

  // #enddocregion route-config-cc
  */
  {path: '/crisis-center/...',   name: 'CrisisCenter',     component: CrisisCenterComponent, useAsDefault: true},
  {path: '/heroes',   name: 'Heroes',     component: HeroListComponent},
  {path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent},
  // #docregion other
  {path: '/*other',  redirectTo: ['CrisisCenter']},
  // #enddocregion other
])
// #enddocregion route-config
export class AppComponent { }
