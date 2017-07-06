import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  term: string;
  result: any;
  p: number = 1;
  links: string[] = [];
  counter: number;

  constructor(private searchService: SearchService, private resultsService: ResultsService) {
    this.term = this.resultsService.getResult();
    this.search();
  }


  search() {
    if(this.term == undefined)
      return;
    this.searchService.search(this.term.toLowerCase())
      .subscribe(data => {
        this.counter = 0;
        this.result = JSON.stringify(data).substr(1, JSON.stringify(data).length-2).replace(/\"/g, " ").split(',');
        for(var i = 0; i < this.result.length; i++){
          this.links.push((this.result[i]).replace(" ", ""));
        }
        this.result = this.result.map(s=>{return s.split('/')[1];});
        var a_tags = document.getElementsByTagName('a');
        for (var i = 0; i < a_tags.length; i++) {
          a_tags[i].href = "file:///Users/jogato/Desktop/searchlite/backend/data/" + this.links[this.counter];
          this.counter++;
        }
      });
      
  }

  getCount(){
    var a_tags = document.getElementsByTagName('a');
    for (var i = 0; i < a_tags.length; i++) {
      a_tags[i].href = "file:///Users/jogato/Desktop/searchlite/backend/data/p1-data/" + this.links[this.counter];
      this.counter++;
    }
  }
}
