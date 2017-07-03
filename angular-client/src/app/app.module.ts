import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdInputModule, MdIconModule, MdCardModule, MdListModule, MdChipsModule, MdTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchService } from './search.service';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { LoginComponent } from './login/login.component';
import { SearchResultsComponent } from './search-results/search-results.component'; 
import { ResultsService } from './results.service';

const appRoutes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    SearchComponent,
    LoginComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdInputModule,
    HttpModule,
    MdListModule,
    MdChipsModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    MdIconModule,
    MdTabsModule,
  ],
  providers: [SearchService, ResultsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
