import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { ResultsService } from '../results.service';
import { ProfileDataService } from '../profile-data.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
 import * as firebase from 'firebase';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  term: string;
  result: any;
  history_db: any;
  

  constructor(private searchService: SearchService, private resultService: ResultsService, 
              private profileData: ProfileDataService, private route: Router, private db: AngularFireDatabase) {
    this.history_db = db.database;
  }

  search() {
    if(this.profileData.getUID() != null){
      var uid = this.profileData.getUID();
      var temp = this.term;
      var timestamp = new Date();
      var history_db_ref = this.history_db.ref('users/' + uid);
      var updateList = this.history_db.ref('users/' + uid + '/history');
      history_db_ref.once('value').then(function(snapshot){
        if(snapshot.val() == null){
            history_db_ref.set({
            history: {[temp]: (timestamp.getMonth()+1).toLocaleString() + "/" + timestamp.getFullYear().toLocaleString().replace(/,/, "")}
          });
        }
        else{
          updateList.update({
          [temp]: 
          (timestamp.getMonth()+1).toLocaleString() + "/" + timestamp.getFullYear().toLocaleString().replace(/,/, "")
          });
        }
      });
    }
    this.searchService.search(this.term.toLowerCase())
      .subscribe(data => {
        this.resultService.setResult(data); //Passes the term to service -> result component
        this.route.navigate(["../results"]);
      });
  }
}
