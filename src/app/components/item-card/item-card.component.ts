import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
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

