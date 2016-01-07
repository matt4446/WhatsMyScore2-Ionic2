import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {ProvidersListPage} from "../providersListPage/providersListPage";
import {SearchCompetitorsPage} from "../searchCompetitorsPage/searchCompetitorsPage";
import {Logger} from "../../providers/logger/logger"
@Page({
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
  
  public NavigateToSearchList()
  {
      this.navController.push(SearchCompetitorsPage, {}, {}, () => {
          this.logger.notify("push search page callback");
      });
  }
}
