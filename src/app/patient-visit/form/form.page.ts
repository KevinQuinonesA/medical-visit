import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/interfaces';
import { LoadingController, ToastController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-patient-visit-form',
  templateUrl: 'form.page.html',
  styleUrls: ['form.page.scss'],
})
export class PatientVisitFormPage {
  patientForm: FormGroup;
  loading: any;
  patient: Patient;
  latitud;
  longitud;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private geo: Geolocation) {
    this.patientForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      birth_date: [null],
      height: [''],
      address: [null],
      gps: [null],
    });
  }

  ngOnInit() {}

  obtenerCoordenadas(){
    this.geo.getCurrentPosition({
      timeout:10000,
      enableHighAccuracy: true
    }).then((res)=>{
      this.latitud = res.coords.latitude;
      this.longitud = res.coords.longitude;
    }).catch((e)=>{
      console.log(e);
    });
  }
  // update(_id: any, user: any) {
  //   return new Promise((resolve, reject) => {
  //     this.patientService.update(_id, user).subscribe(
  //       (res) => {
  //         resolve({
  //           data: user,
  //           event: 'update',
  //         });
  //         this.router.navigate(['/admin/usuarios']);
  //       },
  //       (err) => {
  //         reject(err);
  //       }
  //     );
  //   });
  // }

  // create(user: any) {
  //   return new Promise((resolve, reject) => {
  //     this.patientService.create(user).subscribe(
  //       (res) => {
  //         resolve({
  //           data: user,
  //           event: 'create',
  //         });
  //         this.router.navigate(['/admin/usuarios']);
  //       },
  //       (err) => {
  //         reject(err);
  //       }
  //     );
  //   });
  // }

  async save() {
    this.presentLoading();
    const data = this.patientForm.value;
    data.id = this.patientService.createId();
    const enlace = 'Patient';
    await this.patientService
      .create<Patient>(data, enlace, data.id)
      .then((res) => {
        this.router.navigate(['../tabs/tab1']);
        this.patientForm.reset();
      });

    this.presentToast('Guardado con éxito', 2000);
  }

  async presentToast(message: string, duration: number) {
    const toast = await this.toastController.create({ message, duration });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait ...',
      duration: 2000,
    });
    await loading.present();
  }
}
