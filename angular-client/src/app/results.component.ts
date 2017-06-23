import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  //selector: 'result-root',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent {
  term: string;
  result: string;

  constructor(private searchService: SearchService) {}

  /*search() {
    this.searchService.search(this.term)
      .subscribe(data => {
        this.result = JSON.stringify(data);
      });
  }*/
}
