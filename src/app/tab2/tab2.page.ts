import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { Patient } from '../models/interfaces';
import { LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  patientForm: FormGroup;
  loading: any;
  patient: Patient;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) {
    this.patientForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      birth_date: [null],
      height: [''],
      address: [null],
      gps_address: [null],
    });
  }

  ngOnInit() {}

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
    // this.loading.dismiss();

    // const userFormValue = this.patientForm.value;
    // const group = [userFormValue.groups.id];
    // const user = Object.assign({}, userFormValue, { groups: group });
    // if (user.password && user.password === '') {
    //   delete user.password;
    // }

    // const send = this.user
    //   ? this.update(this.user.id, user)
    //   : this.create(user);

    // send
    //   .then((res: any) => {
    //     this.snackBar.open('Guardado correctamente!', 'Cerrar', {
    //       duration: 3000,
    //     });

    //     this.userService.formControl.next(res);

    //     if (res.event === 'create') {
    //       this.router.navigate(['/admin/usuarios']);
    //     }
    //   })
    //   .catch((err) => {
    //     this.snackBar.open('Ops...algo no esta funcionando!', 'Cerrar', {
    //       duration: 3000,
    //     });
    //   });
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
