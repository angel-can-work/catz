import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { CatBreedsComponent } from './cat-breeds/cat-breeds.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CatDetailsComponent,
    CatBreedsComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'details/:id',
        component: CatDetailsComponent
      },
      {
        path: '**',
        redirectTo: ''
      },
      {
        path: '',
        component: CatBreedsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
