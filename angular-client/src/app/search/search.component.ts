import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  term: string;
  result: any;

  constructor(private searchService: SearchService, private resultService: ResultsService, private route: Router) {}

  search() {
    this.searchService.search(this.term.toLowerCase())
      .subscribe(data => {
        this.resultService.setResult(data); //Passes the term to service -> result component
        this.route.navigate(["../results"]);
      });
  }
}
