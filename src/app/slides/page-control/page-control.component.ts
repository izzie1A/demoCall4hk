import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseControlService, tItem } from "src/app/services/firebase-control.service";

@Component({
  selector: 'app-page-control',
  templateUrl: './page-control.component.html',
  styleUrls: ['./page-control.component.css']
})
export class PageControlComponent {
  campainList$: Observable<any[]> | undefined;
  campainList: any[] = [];
  docHolder: any;
  constructor(private fbS: FirebaseControlService) {
    fbS.t('test').forEach((i) => {
      this.campainList = i;
      this.docHolder = i[0];
    });
  }
  async get(input: any) {
    this.docHolder = input;
  }
}
