//import {bind, Inject} from 'angular2/di';
//import {Component, NgFor} from 'angular2/angular2';
import {Injectable} from 'angular2/core';
import {Http, Response} from "angular2/http";
import {Observable, Subscription, BehaviorSubject} from 'rxjs/Rx';


@Injectable()
export class Logger {
    private weWillNotify: boolean = true;

    public notify(message: any) {
        if (this.weWillNotify) {
            console.log(message);
        }
    }
    
    public notifyResponse(requestObservable: Observable<Response>)
    {
        var subscription = requestObservable.subscribe(response => {
            this.notify("response:");
            this.notify(response);
        });
    }
}