import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import { MaterialModule } from "./material/material.module";
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './common/components/modal/modal.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { ProductComponent } from './product/product.component'


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryListComponent,
    ModalComponent,
    NavbarComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CategoryComponent]
})
export class AppModule { }
