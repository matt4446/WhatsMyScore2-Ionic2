import {App, IonicApp, Config, Platform, NavController} from 'ionic-framework/ionic';
import {Inject, Directive} from 'angular2/core';
import {ANGULAR2_GOOGLE_MAPS_PROVIDERS, ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
//router 
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';

//pages 
import {StartPage} from './pages/startPage/startPage';
import {ProvidersListPage} from './pages/providersListPage/providersListPage';
import {MapPage} from "./pages/upcomingMapPage/upcomingMapPage";
import {SearchCompetitorsPage} from './pages/searchCompetitorsPage/searchCompetitorsPage';

import {IPage} from "./models/models";
import {Logger} from './providers/logger/logger';
//import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router'

@App({
  templateUrl: 'build/app.html',
  providers:[Logger, ANGULAR2_GOOGLE_MAPS_PROVIDERS] ,
  directives: [ROUTER_DIRECTIVES]
})

//router setup
@RouteConfig([
  { path: '/', component: StartPage, name: 'Start' },
  { path: '/Regions', component: ProvidersListPage, name: 'Regions' },
  { path: '/UpcomingCompetitionMap', component: MapPage, name: "UpcomingCompetitionMap" }
])

export class MyApp  {
    private pages : IPage[];
    private root: any; 
    
    public startPage = StartPage;
    public providersPage = ProvidersListPage;
    
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
                page: ProvidersListPage
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
