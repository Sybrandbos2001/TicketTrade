import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcertListComponent } from './pages/concert/concert-list/concert-list.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'concerten', component: ConcertListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
