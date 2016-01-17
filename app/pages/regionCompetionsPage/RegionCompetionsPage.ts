import {Page, NavController, NavParams, Searchbar} from 'ionic-framework/ionic';
import {IProvider, ICompetition} from "../../models/models";

import {ProviderService} from "../../providers/leagues/leagues";
import {CompetitionService} from "../../providers/leagues/competitions";

import {Logger} from "../../providers/logger/logger";
import {Observable, Subscription, BehaviorSubject} from 'rxjs/Rx';
import {Inject} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';


@Page({
  templateUrl: 'build/pages/regionCompetionsPage/regionCompetionsPage.html',
  providers:[ProviderService, CompetitionService, ROUTER_PROVIDERS],
})

export class RegionCompetionsPage {
    public allItems : ICompetition[];
    public items : ICompetition[];
    
    private searchTerm: string;
    private searchSubject : BehaviorSubject<string>;
    private searchActioner: Subscription<string>;
    
    constructor(
        private logger : Logger,
        private navController: NavController,
        private navParams: NavParams,
        private providerService: ProviderService,
        private competitionService: CompetitionService) 
    {
        this.logger.notify("params:");
        this.logger.notify(navParams);

        this.searchTerm = "";
        this.searchSubject = new BehaviorSubject<string>("");
        //this.searchItems = "";
        //throttle the input to avoid 
        this.searchActioner = this.searchSubject
            //.throttleTime(700)
            .filter((x) => {
                this.logger.notify("all items");
                let t = typeof(this.allItems);
                return t !== "undefined";
            })
            .subscribe((x) => {
                this.logger.notify("search by: " + x);
                
                this.items = this.allItems.filter(e=> 
                        e.Name.toLowerCase().indexOf(x) >= 0)
            });
    }
    
    public StartDate(item: ICompetition)
    {
        var startDate = kendo.parseDate(item.StartDateTimeUtc);
        kendo.toString(startDate, "G");
    }
    
    public onPageWillEnter() {
        let regionId = this.navParams.get("id");
        let providerPromise = this.providerService.Get(regionId);
        
        this.competitionService.List(regionId)
            //map is not a function apparently ... 
            //.map(response => response.json())
            .map(response => response.json())
            .subscribe((items: ICompetition[]) => {
                               
                this.allItems = items;
                
                if(this.searchTerm.length > 0)
                {
                    this.items = this.allItems.filter(e=> 
                        e.Name.toLowerCase().indexOf(this.searchTerm) >= 0);
                }else
                {
                    this.items = this.allItems;
                }
            });
    }
    
    public update(searchBar: Searchbar){
        this.searchTerm = searchBar.value ? searchBar.value : "";;
        
        this.logger.notify("search update: " + this.searchTerm);
        this.searchSubject.next(this.searchTerm);
    }
    
    ngOnDestroy() {
        //clear subscribers etc
        this.logger.notify("Kill Competition List Page");

        //this.searchActioner.unsubscribe();
    }

}
