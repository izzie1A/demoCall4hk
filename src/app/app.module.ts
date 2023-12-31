import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { HomePageComponent } from './slides/home-page/home-page.component';
import { CampaignListComponent } from './slides/campaign-list/campaign-list.component';
import { EventListComponent } from './slides/event-list/event-list.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';


import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

import { PageControlComponent } from './slides/page-control/page-control.component';
import { getStorage, provideStorage } from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CampaignListComponent,
    EventListComponent,
    ItemCardComponent,
    NavBarComponent,
    FooterComponent,
    PageControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirebaseApp(() => initializeApp({"projectId":"camera-af868","appId":"1:129701599624:web:d0fc2aec4d2fcde87f823d","databaseURL":"https://camera-af868-default-rtdb.firebaseio.com","storageBucket":"camera-af868.appspot.com","locationId":"us-central","apiKey":"AIzaSyAn4xbkq-uPWA7PZzbfJO1FJv1AWvrmYLY","authDomain":"camera-af868.firebaseapp.com","messagingSenderId":"129701599624","measurementId":"G-6YTEXV96YH"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
