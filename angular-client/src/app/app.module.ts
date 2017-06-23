import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchService } from './search.service';
import { RouterModule, Routes } from '@angular/router';
import { MdListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results.component';
import { MdChipsModule } from '@angular/material';

const appRoutes: Routes = [
  {path: 'results.component.html', component: ResultsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdInputModule,
    HttpModule,
    MdListModule,
    MdChipsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
