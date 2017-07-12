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
import { ProfileComponent } from './profile/profile.component';
import { ProfileDataService } from './profile-data.service';
import { SearchService } from './search.service';
import { ResultsService } from './results.service';
import { environment } from '../environments/environment';
import { TeamComponent } from './team/team.component';

const appRoutes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'team', component: TeamComponent},
  {path: '**', redirectTo: ''},
];


@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    SearchComponent,
    ProfileComponent,
    TeamComponent  
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
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    MdIconModule,
    MdTabsModule,
    MdSidenavModule,
    NgxPaginationModule,
    AngularFireDatabaseModule
  ],
  providers: [SearchService, ResultsService, ProfileDataService],

  bootstrap: [AppComponent],
})
export class AppModule {}
