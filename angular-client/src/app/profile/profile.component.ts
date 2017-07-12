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

  user: any;
  user_name: string;
  user_email: string;
  user_id: string;
  x: any = [];
  p: number = 1;

  constructor(private profileData: ProfileDataService, db: AngularFireDatabase, private route: Router) {
    console.log()
    this.user_id = profileData.getUID();
    if(this.user_id != null){
      this.user_name = profileData.getUser().displayName;
      this.user_email = profileData.getUID().email;
    }
    else{
      this.user_name = "";
      this.user_email = "";
    }
  db.list('/users/' + this.user_id + "/history", { preserveSnapshot: true})
    .subscribe(snapshots => {
      snapshots.forEach(snapshot =>{
        this.x.push([snapshot.key, snapshot.val()]);
      });
    });
       
  }

  goHome(){
    this.route.navigate(["/"]);
  }

}

