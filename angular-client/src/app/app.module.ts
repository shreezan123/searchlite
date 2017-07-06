import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdInputModule, MdIconModule, MdCardModule, 
         MdListModule, MdChipsModule, MdTabsModule, MdSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchService } from './search.service';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { LoginComponent } from './login/login.component';
import { ResultsService } from './results.service';
import { environment } from '../environments/environment';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgxPaginationModule } from 'ngx-pagination';



const appRoutes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign_up', component: SignUpComponent},
  {path: '**', redirectTo: ''},
];


@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    SearchComponent,
    LoginComponent,
    SignUpComponent,
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
  ],
  providers: [SearchService, ResultsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
