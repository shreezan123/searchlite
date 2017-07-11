import { Component } from '@angular/core';
import { ProfileDataService } from '../profile-data.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
 import * as firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user: any;
  user_name: string;
  user_email: string;

  constructor(private profileData: ProfileDataService, db: AngularFireDatabase) {
    if(profileData.getUID() != null){
      this.user_name = profileData.getUser().displayName;
      this.user_email = profileData.getUser().email;
    }
    else{
      this.user_name = "";
      this.user_email = "";
    }


  }

}
