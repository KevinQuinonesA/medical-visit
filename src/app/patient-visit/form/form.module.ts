import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientVisitFormPage } from './tab2.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { PatientVisitFormPageRoutingModule } from './tab2-routing.module';

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
