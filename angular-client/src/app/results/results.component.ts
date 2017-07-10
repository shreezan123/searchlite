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
  result: string[] = [];
  p: number = 1;
  description: string[] = [];
  

  constructor(private searchService: SearchService, private resultsService: ResultsService) {
    this.result = this.resultsService.getResult();
    this.firstSearch();
  }

  search() {
    this.searchService.search(this.term.toLowerCase())
      .subscribe(data => {
        if(data == null || data == undefined){
          this.result.push("NO RESULTS FOUND");
        }
        this.result = JSON.stringify(data).substr(1, JSON.stringify(data).length-2).replace(/\"/g, " ").replace(/]/g, "").split(',');
        this.result = this.result.map(s=>{return s.split('/')[1];});
        this.result = this.result.map(s=>{return s.replace(/_/g, "/")});
        for(var i = this.result.length/2; i < this.result.length; i++){
          this.description.push(this.result[i]);
        }
        console.log(this.description);
      });
      
  }

  firstSearch(){
    if(this.result == undefined){
      this.result = [];
      this.result.push("NO RESULTS FOUND")
      
    }
    this.result = JSON.stringify(this.result).substr(1, JSON.stringify(this.result).length-2).replace(/\"/g, " ").split(',');
    this.result = this.result.map(s=>{return s.split('/')[1];});

  }

}
