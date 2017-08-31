import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppsListComponent } from './apps-list/apps-list.component';
import { RoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavComponent } from './nav/nav.component';
import { AppService } from './services/app.service';
import { LoaderNotifierService } from './services/loader-notifier.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
    declarations: [
        AppComponent,
        AppsListComponent,
        HomeComponent,
        PageNotFoundComponent,
        NavComponent,
        LoadingIndicatorComponent
    ],
    imports: [
        RoutingModule,
        BrowserModule,
        HttpClientModule
    ],
    providers: [AppService, HttpClientModule, LoaderNotifierService],
    bootstrap: [AppComponent]
})
export class AppModule { }
