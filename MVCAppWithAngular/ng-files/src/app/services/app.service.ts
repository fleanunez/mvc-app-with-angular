import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { App } from '../models/app.model';
import { Observable, Subject } from 'rxjs';
import { ArrayUtils } from '../utils/array-utils';
import { LoaderNotifierService } from '../services/loader-notifier.service'

@Injectable()
export class AppService {

    constructor(private httpClient: HttpClient, private loaderNotifierService: LoaderNotifierService)
    { }
    
    getApps(): Subject<App[]> {
        this.loaderNotifierService.show();

        var subject = new Subject<App[]>();
        var observable = this.httpClient.get<App[]>('/api/apps')
            
            .finally(() => this.loaderNotifierService.hide())
            .map(ArrayUtils.convertArrayKeysToLowerCase)            
            .map<any[], App[]>(ArrayUtils.CastArray)
            .subscribe(subject);

        return subject;
    }
}
