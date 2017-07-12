import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { ResultsService } from '../results.service';
import { ProfileDataService } from '../profile-data.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
 import * as firebase from 'firebase';

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
  temp: any = [];
  history_db: any;
  

  constructor(private searchService: SearchService, private resultsService: ResultsService, 
              private profileData: ProfileDataService, db: AngularFireDatabase) {
    this.history_db = db.database;
    this.result = this.resultsService.getResult();
    this.firstSearch();
  }

  search() {
    this.result = [];
    this.description = [];
    this.temp = [];
    if(this.profileData.getUID() != null && this.term != ""){
      var uid = this.profileData.getUID();
      var var_term = this.term;
      var timestamp = new Date();
      var history_db_ref = this.history_db.ref('users/' + uid);
      var updateList = this.history_db.ref('users/' + uid + '/history');
      history_db_ref.once('value').then(function(snapshot){
        if(snapshot.val() == null){
            history_db_ref.set({
            history: {[var_term]: (timestamp.getMonth()+1).toLocaleString() + "/" + timestamp.getFullYear().toLocaleString().replace(/,/, "")}
          });
        }
        else{
          updateList.update({
          [var_term]: 
          (timestamp.getMonth()+1).toLocaleString() + "/" + timestamp.getFullYear().toLocaleString().replace(/,/, "")
          });
        }
      });
    }
    
    this.searchService.search(this.term.toLowerCase())
      .subscribe(data => {
        if(data == null || data == undefined){
          return;
        }
        else if(data[0] == undefined){
          this.temp.push(["NO RESULTS FOUND", "..."]);
          return;
        }
        else if(JSON.stringify(data[0]).replace(/\"/g, "") == "NO RESULTS FOUND"){
          this.temp.push([JSON.stringify(data[0]).replace(/\"/g, ""), JSON.stringify(data[1]).replace(/\"/g, "")])
          return;
        }
        this.result = JSON.stringify(data).substr(1, JSON.stringify(data).length-2).replace(/\"/g, " ").replace(/]/g, "").split(',');
        this.result = this.result.map(s=>{return s.split('/')[1];});
        
        for(var i = this.result.length/2; i < this.result.length; i++){
          this.description.push(this.result[i]);
        }

      this.result.splice(this.result.length/2, this.description.length);
      this.result = this.result.map(s=>{return s.replace(/_/g, "/")});
      var description = this.description;
      this.temp = this.result.map(function (e, i) {
        return [e, description[i]];
      });
  
    });
      
  }

  firstSearch(){
    if(this.result == undefined || this.result == null){
      return;
    }
    else if(this.result[0] == undefined){
        this.temp.push(["NO RESULTS FOUND", "..."]);
        return;
     }
    else if(JSON.stringify(this.result[0]).replace(/\"/g, "") == "NO RESULTS FOUND"){
      this.temp.push([JSON.stringify(this.result[0]).replace(/\"/g, ""), JSON.stringify(this.result[1]).replace(/\"/g, "")])
      return;
    }
    this.result = JSON.stringify(this.result).substr(1, JSON.stringify(this.result).length-2).replace(/\"/g, " ").replace(/]/g, "").split(',');
    this.result = this.result.map(s=>{return s.split('/')[1];});
    for(var i = (this.result.length/2); i < this.result.length; i++){
      this.description.push(this.result[i]);
    }
    this.result.splice(this.result.length/2, this.description.length);
    this.result = this.result.map(s=>{return s.replace(/_/g, "/")});
    var description = this.description;
    this.temp = this.result.map(function (e, i) {
      return [e, description[i]];
    });
  }

}
