import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientVisitFormPage } from './form/form.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { PatientVisitListPage } from './list/tab1.page';

export const PatientVisitRoutes: Routes = [
  {
    path: '',
    component: PatientVisitListPage,
  },
  {
    path: 'nuevo',
    component: PatientVisitFormPage,
  },
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ExploreContainerComponentModule,
  ],
  declarations: [PatientVisitFormPage, PatientVisitListPage],
})
export class PatientVisitModule {}
