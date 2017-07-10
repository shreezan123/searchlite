import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdInputModule, MdIconModule, MdCardModule, 
         MdListModule, MdChipsModule, MdTabsModule, MdSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {FlexLayoutModule} from "@angular/flex-layout";
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDataService } from './profile-data.service';
import { SearchService } from './search.service';
<<<<<<< HEAD
import { ResultsService } from './results.service';
import { environment } from '../environments/environment';





const appRoutes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'sign_up', component: SignUpComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', redirectTo: ''},
];

=======
import { RouterModule, Routes } from '@angular/router';
import { MdListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results.component';
import { MdChipsModule } from '@angular/material';

const appRoutes: Routes = [
  {path: 'results.component.html', component: ResultsComponent}
];
>>>>>>> 6d6731963340573a8ad020e505f8900bb6eed4bc

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ResultsComponent,
    SearchComponent,
    SignUpComponent,
    ProfileComponent,
=======
    ResultsComponent
>>>>>>> 6d6731963340573a8ad020e505f8900bb6eed4bc
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, "tantrik-search"),
    AngularFireAuthModule,
    FormsModule,
    MdInputModule,
    HttpModule,
    MdListModule,
    MdChipsModule,
<<<<<<< HEAD
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    MdIconModule,
    MdTabsModule,
    MdSidenavModule,
    NgxPaginationModule,
    AngularFireDatabaseModule,
  ],
  providers: [SearchService, ResultsService, ProfileDataService],
=======
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SearchService],
>>>>>>> 6d6731963340573a8ad020e505f8900bb6eed4bc
  bootstrap: [AppComponent],
})
export class AppModule {}
