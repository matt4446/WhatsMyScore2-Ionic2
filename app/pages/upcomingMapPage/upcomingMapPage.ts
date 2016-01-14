/*
 * http://www.joshmorony.com/ionic-2-how-to-use-google-maps-geolocation-video-tutorial/
 */

import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';

@Page({
    selector: "UpcomingCompetitionMap",
  templateUrl: 'build/pages/upcomingMapPage/upcomingMapPage.html',
  providers:[],
  directives:[ANGULAR2_GOOGLE_MAPS_DIRECTIVES]
})
 
export class MapPage {
  constructor() {
      
  }
  public lat: number = 51.678418;
  public lng: number = 7.809007;
  //public lat: number = 51.678418;
  //public lng: number = 7.809007;
   
}