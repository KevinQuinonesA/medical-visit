import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Patient } from 'src/app/models/interfaces';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class PatientVisitListPage {
  patient: any;
  patientVisits = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.getPatientList();
    this.route.params.subscribe((params) => {
      console.log(params)
      if (params.patient && params.patient !== 'nuevo') {
        this.getPatientById(params.patient);
      }
    });
  }

  getPatientById(id){
    this.patientService.getDoc<Patient>('Patient', id).subscribe((res)=>{
      this.patient=res;
    });
  }

  add() {
    this.router.navigate(['nuevo'], {
      relativeTo: this.route,
    });

  }

  getPatientList() {
    this.patientService.getCollectionChanges('Patient').subscribe((res)=>{
      this.patientVisits = res;
    })
  }
}
