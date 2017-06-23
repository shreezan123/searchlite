import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { ResultsComponent } from './results.component';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  term: string;
  result: string;
  thing: ResultsComponent;

  constructor(private searchService: SearchService) {}

  search() {
    var temp_arr = [];
    this.searchService.search(this.term)
      .subscribe(data => {
        this.thing.result = JSON.stringify(data);
        //this.result = JSON.stringify(data);
      });
  }
}

