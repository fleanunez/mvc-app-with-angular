import { Component, OnInit } from '@angular/core';
import { AppService } from './../services/app.service';
import { App } from './../models/app.model';
import { Observable, Subject, Subscriber, BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-apps-list',
    templateUrl: './apps-list.component.html',
    styleUrls: ['./apps-list.component.css']
})
export class AppsListComponent implements OnInit {
    apps: Subject<App[]>;
    
    constructor(private appService: AppService) {        
    }

    getApps(): void {
        this.apps = this.appService.getApps();        
    }

    clearApps(): void {
        this.apps = new Subject<App[]>();
    }
    
    ngOnInit() {
        
    }


}
