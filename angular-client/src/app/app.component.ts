import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { MdSidenav } from '@angular/material';
import { ProfileDataService } from './profile-data.service';
import { AngularFireDatabase, FirebaseListObservable,  } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';


@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 

  user: Observable<firebase.User>;
  user_image = HTMLImageElement;
  user_history: any;
  history_db: FirebaseListObservable<any>;
  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(public afAuth: AngularFireAuth, private route: Router, private profileData: ProfileDataService,db: AngularFireDatabase) {
    this.history_db = db.list('/users');
    afAuth.auth.onAuthStateChanged(function(user) { //Check if the user is already logged in
      if(user){
        (<HTMLImageElement>document.getElementById('loginimage')).src = afAuth.auth.currentUser.photoURL;
        profileData.setUser(afAuth.auth.currentUser);
        
      }
      else{
        (<HTMLImageElement>document.getElementById('loginimage')).src = "assets/Images/account_temp.png";
        profileData.setUser(null);
      }
    });
  }


  glogin() {
    this.user = this.afAuth.authState;
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    if(this.afAuth.auth.currentUser != null){
      (<HTMLImageElement>document.getElementById('loginimage')).src = this.afAuth.auth.currentUser.photoURL;
      this.profileData.setUser(this.afAuth.auth.currentUser);
    }
    else{
      this.profileData.setUser(null);
    }
    this.sidenav.close();
  }

  flogin() {
    this.user = this.afAuth.authState;
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    if(this.afAuth.auth.currentUser != null){
      (<HTMLImageElement>document.getElementById('loginimage')).src = this.afAuth.auth.currentUser.photoURL;
      this.profileData.setUser(this.afAuth.auth.currentUser);
    }
    this.sidenav.close();
    
  }

  profile(){
    if(this.afAuth.auth.currentUser != null){
      this.sidenav.close();
      //this.profileData.setUser(this.afAuth.auth.currentUser);
      this.route.navigate(["../profile"]);
    }
    else{
      this.sidenav.open();
    }
    
  }

  logout(){
    this.afAuth.auth.signOut().then(function() {
      this.profileData.setUser(null);
      (<HTMLImageElement>document.getElementById('loginimage')).src = "assets/Images/account_temp.png";
    }).catch(function(error) {
    });
    this.route.navigate(["/"]);
    window.location.reload();
  }
  

}

