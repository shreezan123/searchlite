import { Component} from '@angular/core';
import { SearchService } from '../search.service';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  term: string;
  temp: any;
  result: string[] = [];

  constructor(private searchService: SearchService, private resultsService: ResultsService) {
    this.temp = this.resultsService.getResult();
    for(var i = 0; i < 10; i++){
      if(this.temp == null)
        break;
      this.result.push(JSON.stringify(this.temp[i]));
    }
  }


  search() {
    this.searchService.search(this.term)
      .subscribe(data => {
        var result_element = document.getElementsByClassName("results");
        for(var i = 0; i < 10; i++){
          if(data == null)
            break;
          else if(result_element != null){
            for(var j = 0; j < result_element.length; j++){
              result_element[j].innerHTML = " ";
            }
          }
          this.result.push(JSON.stringify(data[i]));
        }
      });
  }
}
