import {Page, NavController, NavParams, Searchbar} from 'ionic-framework/ionic';
import {IProvider} from "../../models/models";
import {ProviderService} from "../../providers/leagues/leagues";
import {Logger} from "../../providers/logger/logger";
import {Observable, Subscription, BehaviorSubject} from 'rxjs/Rx';


@Page({
  templateUrl: 'build/pages/providersListPage/providersListPage.html',
  providers:[ProviderService] 
})

export class ProvidersListPage {
    public allItems : IProvider[];
    public items : IProvider[];
    
    private searchTerm: string;
    private searchSubject : BehaviorSubject<string>;
    private searchActioner: Subscription<string>;
    
    constructor(
        private logger : Logger,
        private providerService : ProviderService) 
    {
        this.searchTerm = "";
        this.searchSubject = new BehaviorSubject<string>("");
        //this.searchItems = "";
        //throttle the input to avoid 
        this.searchActioner = this.searchSubject
            //.throttleTime(700)
            .filter((x) => {
                this.logger.notify("all items");
                var t = typeof(this.allItems);
                return t !== "undefined";
            })
            .subscribe((x) => {
                this.logger.notify("search by: " + x);
                
                this.items = this.allItems.filter(e=> 
                        e.Name.toLowerCase().indexOf(x) >= 0)
            });
    }
    
    public onPageWillEnter() {
        this.providerService.List()
            //map is not a function apparently ... 
            //.map(response => response.json())
            .subscribe((response) => {
                var items = response.json();
                this.logger.notify("items loaded");
                this.logger.notify(items);
                
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
        
        this.searchTerm = searchBar.value;
        this.logger.notify("search update: " + this.searchTerm);
        
        this.searchSubject.next(this.searchTerm);
    }
    
    ngOnDestroy() {
        //clear subscribers etc
        this.logger.notify("Kill ProvidersListPage");

        this.searchActioner.unsubscribe();
    }

}
