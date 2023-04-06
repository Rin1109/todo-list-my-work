import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { TaskFiltersComponent } from './task-filters/task-filters.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {RouterModule} from "@angular/router";
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskFiltersComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    TourOfHeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
