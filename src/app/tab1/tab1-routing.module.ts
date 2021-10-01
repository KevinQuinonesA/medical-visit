import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientVisitFormPage } from '../patient-visit/form/form.page';
import { PatientVisitListPage } from '../patient-visit/list/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: ':patient',
    children: [
      {
         path: '',
         component: PatientVisitListPage
      },
      {
         path: 'nuevo',
         component: PatientVisitFormPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
