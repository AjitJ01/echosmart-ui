import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import { MaterialModule } from "./material/material.module";
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './common/components/modal/modal.component'


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryListComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CategoryComponent]
})
export class AppModule { }
