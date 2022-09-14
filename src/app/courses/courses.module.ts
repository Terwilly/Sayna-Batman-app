import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursListComponent } from './cours-list/cours-list.component';
import { CoursItemComponent } from './cours-list/cours-item/cours-item.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesComponent,
    CoursListComponent,
    CoursItemComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    RouterModule
  ]
})
export class CoursesModule { }
