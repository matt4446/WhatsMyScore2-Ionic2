# WhatsMyScore2-Ionic2
Trampolining Scores App - Built in Ionic 2 + Angular 2 + TypeScript 

Install Ionic v2 CLI

http://ionicframework.com/docs/v2/getting-started/installation/

### Added: 
1. Regions/Leagues + search (list filter)
2. Map page - Google Map - in progress 
 

### to-do: 
1. finish route changes 
2. search page


### router-link: 
Added routerLink directive to the start page: 
[Commit](https://github.com/matt4446/WhatsMyScore2-Ionic2/blob/58b59d5963b5c062d6dc049e6109c53d4e7d5b1e/app/pages/startPage/startPage.html)

changed the button from:
>(click)="NavigateToProviderList()


To:
>[routerLink]="['/Regions']"

### Router Sections: 
1. /Regions
    * todo: more complex route 
    * Regions/:regionId/Competition/:competitionId

2. /UpcomingCompetitionMap
