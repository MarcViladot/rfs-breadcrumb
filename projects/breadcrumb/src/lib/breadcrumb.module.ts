import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule { }
