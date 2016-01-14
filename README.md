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

changed the button from:
><button ion-item (click)="NavigateToProviderList()">
    <ion-icon name="leaf" item-left></ion-icon>
    Leagues and Regions
    <p>BUCS, SUTL ...</p>
</button>

To:
><button ion-item [routerLink]="['/Regions']">
    <ion-icon name="leaf" item-left></ion-icon>
    Leagues and Regions
    <p>BUCS, SUTL ...</p>
</button>


### Router Sections: 
1. /Regions
    * todo: more complex route 
    * Regions/:regionId/Competition/:competitionId

2. /UpcomingCompetitionMap
