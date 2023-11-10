import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  posterimg1 = "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/call4hkFolder%2FposterImg1.jpg?alt=media&token=59fb26b6-3870-49cf-8e32-913a96c8f4d2&_gl=1*18302c4*_ga*MTc4MDIzNzU1Ni4xNjk1NjIwMTg0*_ga_CW55HF8NVT*MTY5ODU1OTk2My41MC4xLjE2OTg1NjAyNTguNTYuMC4w";
  temimg = "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/call4hkFolder%2FdefaultProfile.png.png?alt=media&token=ebe43773-8e31-4986-8bb2-b40f5b676d05&_gl=1*1j7mile*_ga*MTc4MDIzNzU1Ni4xNjk1NjIwMTg0*_ga_CW55HF8NVT*MTY5ODU2NDAyNS41MS4xLjE2OTg1NjQ1OTQuNDAuMC4w"
  isLinear = false;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  constructor(private _formBuilder: FormBuilder) {}
}
