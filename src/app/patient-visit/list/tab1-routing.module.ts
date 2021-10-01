import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientVisitFormPage } from '../form/form.page';
import { PatientVisitListPage } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: PatientVisitListPage,
  },
  {
    path: 'nuevo',
    component: PatientVisitFormPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientVisitListPageRoutingModule {}
