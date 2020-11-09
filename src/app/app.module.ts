import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { RouterModule, Routes } from '@angular/router';

import { DesktopsComponent } from './component/desktops/desktops.component';
import { LaptopsComponent } from './component/laptops/laptops.component';
import { AccesoriesComponent } from './component/accesories/accesories.component';
import { SpecialOffersComponent } from './component/special-offers/special-offers.component';
import { ReviewsComponent } from './component/reviews/reviews.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { DesktopDetailsComponent } from './component/desktop-details/desktop-details.component';

import { DesktopService } from './services/desktop-service.service';
import { ReviewService } from './services/review.service';
import { LanguageService } from './services/language.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { LaptopDetailsComponent } from './component/laptop-details/laptop-details.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { AgmCoreModule } from '@agm/core';
import { RatingModule } from 'ng-starrating';
import { LoginService } from './services/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';



// import { Globals } from '@angular/common/sha';
const misRutas: Routes = [
  { path: '', component: HomeComponent },
  { path: 'desktops', component: DesktopsComponent },
  { path: 'desktop-details/:codigo', component: DesktopDetailsComponent },
  { path: 'laptops', component: LaptopsComponent },
  { path: 'accesories', component: AccesoriesComponent },
  { path: 'special-offers', component: SpecialOffersComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    DesktopsComponent,
    LaptopsComponent,
    AccesoriesComponent,
    SpecialOffersComponent,
    ReviewsComponent,
    NavBarComponent,
    DesktopDetailsComponent,
    LaptopDetailsComponent,
    SignInComponent,
    FooterComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RatingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularFireStorageModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    RouterModule.forRoot(misRutas),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    })
  ],
  providers: [DesktopService, AngularFirestore, LoginService, MatPaginatorIntl, ReviewService, DatePipe, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
