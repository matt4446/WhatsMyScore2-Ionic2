import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {IProvider} from "../../models/provider";
import {ProviderService} from "../../providers/leagues/leagues";
import {Logger} from "../../providers/logger/logger";

@Page({
  templateUrl: 'build/pages/providersListPage/providersListPage.html',
  providers:[ProviderService] 
})

export class ProvidersListPage {
    public items : IProvider[];
    constructor(
        private logger : Logger,
        private providerService : ProviderService) 
    {
        providerService.List()
            //.map(response => response.json())
            .subscribe((response) => {
                var items = response.json();
                this.logger.notify("items");
                this.logger.notify(items);
                this.items = items;
            });
    }
}
