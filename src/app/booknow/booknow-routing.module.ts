import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooknowComponent } from './booknow/booknow.component';

const routes: Routes = [
  {
    path: "booknow",
    component: BooknowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooknowRoutingModule { }
