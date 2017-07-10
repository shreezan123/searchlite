import { Component } from '@angular/core';
import { ProfileDataService } from '../profile-data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user: any;
  user_name: string;
  user_email: string;

  constructor(private profileData: ProfileDataService) {
    this.user = profileData.getUser();
    console.log(this.user);
    if(this.user != undefined || this.user != null){
      this.user_name = this.user.displayName;
      this.user_email = this.user.email;
    }
    else{
      this.user_name = "";
      this.user_email = "";
    }
  }

}
