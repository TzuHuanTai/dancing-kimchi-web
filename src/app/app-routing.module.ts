import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full'
  }, {
    path: 'order',
    component: OrderComponent,
    pathMatch: 'full'
  }, {
    path: 'products',
    component: ProductsComponent,
    pathMatch: 'full'
  }, {
    path: 'locations',
    component: LocationsComponent,
    pathMatch: 'full'
  }, {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
