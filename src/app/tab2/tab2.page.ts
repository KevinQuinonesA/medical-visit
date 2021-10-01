import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  patientForm: FormGroup;

  latitud;
  longitud;


  constructor(private router: Router, private formBuilder: FormBuilder, private geo: Geolocation) {
    this.patientForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      birth_date: [null],
      height: [''],
      address: [null],
      gps_address: [null],
    });
  }

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

  ngOnInit() {}
}
