import {Page, NavController, NavParams, Alert} from 'ionic-framework/ionic';
import {ProvidersListPage} from "../providersListPage/providersListPage";
import {SearchCompetitorsPage} from "../searchCompetitorsPage/searchCompetitorsPage";
import {MapPage} from "../upcomingMapPage/upcomingMapPage";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';

import {Logger} from "../../providers/logger/logger";
@Page({
    selector: 'Start',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'build/pages/startPage/startPage.html'
})

export class StartPage {
  constructor(
      private navController: NavController, 
      private navParams: NavParams,
      private logger: Logger) 
  {
      
  }
  
  public NavigateToProviderList()
  {
      this.navController.push(ProvidersListPage, {}, {}, () => {
         this.logger.notify("push providers page callback");
      });
  }
  
 
  public NavigateToMapPage()
  {
      this.navController.push(MapPage, {}, {}, () => {
          this.logger.notify("push map page callback");
      });
  }
  
   public NavigateToSearchList()
  {
      this.navController.push(SearchCompetitorsPage, {}, {}, () => {
          this.logger.notify("push search page callback");
      });
  }
  
  public NavigateToCompetitionSearch() 
  {
      this.NotAvailable();
      //todo - competition search.
  }
  
  public NavigateToCompetitorSearch()
  {
      this.NotAvailable();
  }
  
  public NotAvailable()
  {
    let alert = Alert.create({
        title: 'Unavailble',
        subTitle: 'I have not made/remade this yet',
        buttons: ['Dismiss']
    });
    this.navController.present(alert);
  }
}
