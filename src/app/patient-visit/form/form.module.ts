import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientVisitFormPage } from './form.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { PatientVisitFormPageRoutingModule } from './form-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ExploreContainerComponentModule,
    PatientVisitFormPageRoutingModule
  ],
  declarations: [PatientVisitFormPage]
})
export class PatientVisitFormPageModule {}
