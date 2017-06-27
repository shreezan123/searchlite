import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdInputModule, MdIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchService } from './search.service';
import { RouterModule, Routes } from '@angular/router';
import { MdListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results.component';
import { MdChipsModule } from '@angular/material';
import { SearchComponent } from './search/search.component';
import {FlexLayoutModule} from "@angular/flex-layout"; 

const appRoutes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'results', component: ResultsComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    SearchComponent
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
  ],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
