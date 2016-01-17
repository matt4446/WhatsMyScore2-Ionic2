import {App, IonicApp, Config, Platform, NavController} from 'ionic-framework/ionic';
import {Inject, Directive, provide} from 'angular2/core';
import {ANGULAR2_GOOGLE_MAPS_PROVIDERS, ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
//router 
import {RouteConfig, LocationStrategy,PathLocationStrategy, HashLocationStrategy, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';

//pages 
import {StartPage} from './pages/startPage/startPage';
import {RegionsPage} from './pages/regionsPage/regionsPage';
import {RegionCompetionsPage} from './pages/regionCompetionsPage/RegionCompetionsPage';

import {MapPage} from "./pages/upcomingMapPage/upcomingMapPage";
import {SearchCompetitorsPage} from './pages/searchCompetitorsPage/searchCompetitorsPage';

import {IPage} from "./models/models";
import {Logger} from './providers/logger/logger';
//import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router'
//import {} from "kendo"

var w: any = window;
var $ = require('jquery');
w.jQuery = $;
w.$ = $;
w.kendo = require("../node_modules/kendo-ui-core/dist/js/kendo.custom.js")

@App({
  templateUrl: 'build/app.html',
  providers:[
    Logger, ANGULAR2_GOOGLE_MAPS_PROVIDERS, 
    ROUTER_PROVIDERS,
    PathLocationStrategy,
    //provide(APP_BASE_HREF, {useValue: '#/'})
    provide(APP_BASE_HREF, {useValue: "#" + location.pathname})
  ],
  directives: [ROUTER_DIRECTIVES]
})

//router setup
@RouteConfig([
  { path: '/', component: StartPage, name: 'Start' },
  { path: '/Regions', component: RegionsPage, name: 'Regions' },
  { path: '/Regions/:id', component: RegionCompetionsPage, name: "RegionCompetitions" },
  { path: '/UpcomingCompetitionMap', component: MapPage, name: "UpcomingCompetitionMap" }
])

export class MyApp  {
    private pages : IPage[];
    private root: any; 
    
    public startPage = StartPage;
    public providersPage = RegionsPage;
    
    constructor(
        private app: IonicApp,
        private config: Config,
        private platform: Platform,  
        private logger: Logger) {
        //var logger = new Logger();
        this.logger.notify("starting");

        this.pages = [
            {
                title : "Providers",
                page: RegionsPage
            },
            {
                title : "Search",
                page: SearchCompetitorsPage
            }
        ];
        
        this.root = StartPage;


        platform.ready().then(() => {
            logger.notify("ready-started");
            
        // Do any necessary cordova or native calls here now that the platform is ready
        });
    }
    
}
