import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent, AppComponentContent } from './app.component';
import { AppShellModule } from '@iapps/ng-dhis2-shell';
import { environment } from '../environments/environment';
import {ReactWrapperModule} from '@iapps/ng-dhis2-ui'
import { AppRoutingModule } from './app-routing.module';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { LockRequestsComponentContent } from './lock-requests/lock-requests.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactWrapperModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AppShellModule.forRoot({
      pwaEnabled: false,
      isDevMode: !environment.production,
    }),
  ],
  declarations: [AppComponent, AppComponentContent,AppSidebarComponent,LockRequestsComponentContent,AppSidebarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

