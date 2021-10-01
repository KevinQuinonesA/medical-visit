import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientVisitFormPage } from './form.page';

const routes: Routes = [
  {
    path: '',
    component: PatientVisitFormPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientVisitFormPageRoutingModule {}
