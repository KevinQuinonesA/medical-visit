import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientVisitListPage } from './tab1.page';

import { PatientVisitListPageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PatientVisitListPageRoutingModule
  ],
  declarations: [PatientVisitListPage]
})
export class PatientVisitListPageModule {}
