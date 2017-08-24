import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppsListComponent } from './apps-list/apps-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'apps', component: AppsListComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: true });