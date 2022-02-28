import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooknowRoutingModule } from './booknow-routing.module';
import { BooknowComponent } from './booknow/booknow.component';


@NgModule({
  declarations: [
    BooknowComponent
  ],
  imports: [
    CommonModule,
    BooknowRoutingModule
  ]
})
export class BooknowModule { }
