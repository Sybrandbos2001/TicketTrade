import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ConcertListComponent } from './pages/concert/concert-list/concert-list.component';
import { ConcertCreateComponent } from './pages/concert/concert-create/concert-create.component';
import { ConcertDetailComponent } from './pages/concert/concert-detail/concert-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    LandingComponent,
    ConcertListComponent,
    ConcertCreateComponent,
    ConcertDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
