import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LocationsComponent } from './locations/locations.component';
import { SharedMaterialModule } from './shared-material.module';
import { PositionHintComponent } from './locations/snack-bar/position-hint.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    OrderComponent,
    ProductsComponent,
    LocationsComponent,
    PositionHintComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgbModule,
    SharedMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
