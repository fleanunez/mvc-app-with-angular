import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderNotifierService } from '../services/loader-notifier.service'
import { Subscription } from 'rxjs';
import { LoaderState } from '../models/loader-state.interface';

@Component({
    selector: 'app-loading-indicator',
    templateUrl: './loading-indicator.component.html',
    styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {

    private loadingIndicatorSubscription: Subscription;
    show: boolean;

    constructor(private loaderNotifierService: LoaderNotifierService) { }

    ngOnInit() {
        this.loadingIndicatorSubscription = this.loaderNotifierService
            .loaderStateSubject
            .subscribe(this.loadingStateObserver);
    }

    private loadingStateObserver = {
        next: (loaderState) => this.show = loaderState.show
    };


    ngOnDestroy() {
        console.log('UNSUBSCRIBED!');
        this.loadingIndicatorSubscription.unsubscribe();
    }
}
