import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageListComponent } from './Views/image-list/image-list.component';
import { AuthorListComponent } from './Views/author-list/author-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    AuthorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
