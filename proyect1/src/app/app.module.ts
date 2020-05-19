import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirNgIfComponent } from './dir-ng-if/dir-ng-if.component';
import { DirNgClassComponent } from './dir-ng-class/dir-ng-class.component';

@NgModule({
  declarations: [
    AppComponent,
    DirNgIfComponent,
    DirNgClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
