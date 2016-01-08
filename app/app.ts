import {App, IonicApp, Config, Platform} from 'ionic-framework/ionic';
import {Inject} from 'angular2/core';

import {StartPage} from './pages/startPage/startPage';
import {ProvidersListPage} from './pages/providersListPage/providersListPage';
import {SearchCompetitorsPage} from './pages/searchCompetitorsPage/searchCompetitorsPage';

import {Logger} from './providers/logger/logger';
//import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router'

interface IPage {
    title: string; 
    page: any;
}

@App({
  templateUrl: 'build/app.html',
  providers:[Logger] 
})

export class MyApp  {
    private pages : IPage[];
    private root: any; 
    
    public startPage = StartPage;
    public providersPage = ProvidersListPage;
    
    constructor(
        private app: IonicApp,
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
