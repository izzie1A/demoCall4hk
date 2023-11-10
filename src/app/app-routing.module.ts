import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './slides/home-page/home-page.component';
import { CampaignListComponent } from './slides/campaign-list/campaign-list.component';
import { EventListComponent } from './slides/event-list/event-list.component';

import { PageControlComponent } from './slides/page-control/page-control.component';

const routes: Routes = [
  { path: '*', component: PageControlComponent },
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'campainList', component: CampaignListComponent },
  { path: 'eventList', component: EventListComponent },
  { path: 'pageControl', component: PageControlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
