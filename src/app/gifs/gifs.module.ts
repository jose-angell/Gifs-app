import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home/home-page.component';
import { SerarchBoxComponent } from './components/search-box/shearch-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SerarchBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GifsModule { }
