import { Injectable } from '@angular/core';
import { LoaderState } from '../models/loader-state.interface';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderNotifierService {

    loaderStateSubject = new Subject<LoaderState>();

    constructor() { }

    show(): void {
        this.loaderStateSubject.next({ show: true });
    }

    hide(): void {
        this.loaderStateSubject.next({ show: false });
    }
}
