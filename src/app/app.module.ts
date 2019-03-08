import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTES } from './app.routes';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { XdComponent } from './xd/xd.component';
import { UserComponent } from './user/user.component';
import {BreadcrumbComponent} from '../../projects/breadcrumb/src/lib/breadcrumb.component';
import {BreadcrumbModule} from '../../projects/breadcrumb/src/lib/breadcrumb.module';



@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent,
    XdComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
