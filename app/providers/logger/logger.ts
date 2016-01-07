//import {bind, Inject} from 'angular2/di';
//import {Component, NgFor} from 'angular2/angular2';
import {Injectable} from 'angular2/core';

@Injectable()
export class Logger {
    private weWillNotify: boolean = true;

    public notify(message: any) {
        if (this.weWillNotify) {
            console.log(message);
        }
    }
}