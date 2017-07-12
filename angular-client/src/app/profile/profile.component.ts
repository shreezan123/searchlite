import { Component } from '@angular/core';
import { ProfileDataService } from '../profile-data.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
 import * as firebase from 'firebase';
 import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user_name: string;
  user_id: string;
  history: any = [];
  p: number = 1;

  constructor(private profileData: ProfileDataService, db: AngularFireDatabase, private route: Router) {
    //Check if the user is logged in to display their name
    this.user_id = profileData.getUID();
    if(this.user_id != null){
      this.user_name = profileData.getUser().displayName;
    }
    else{
      this.user_name = "";
    }

  //Get the user's history form the database
  db.list('/users/' + this.user_id + "/history", { preserveSnapshot: true})
    .subscribe(snapshots => {
      snapshots.forEach(snapshot =>{
        this.history.push([snapshot.key, snapshot.val()]);
      });
    });
       
  }

  //Routes back to the search component
  goHome(){
    this.route.navigate(["/"]);
  }

}

