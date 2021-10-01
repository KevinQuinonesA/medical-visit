import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  patients = [];
  // patients = [
  //   {
  //     id: 1,
  //     name: 'Mario',
  //     birth_date: '14-11-99',
  //     address: 'Calle Saturno',
  //   },
  //   {
  //     id: 2,
  //     name: 'Valery',
  //     birth_date: '15-03-00',
  //     address: 'Calle Venus',
  //   },
  //   {
  //     id: 3,
  //     name: 'Juan',
  //     birth_date: '22-08-96',
  //     address: 'Calle Pluton',
  //   },
  // ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.getPatientList(); 
  }

  getPatientList() {
    this.patientService.getCollectionChanges('Patient').subscribe((res)=>{
      this.patients = res;
    })
  }
}
