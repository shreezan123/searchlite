<<<<<<< HEAD
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { MdSidenav } from '@angular/material';
import { ProfileDataService } from './profile-data.service';
=======
import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { ResultsComponent } from './results.component';
>>>>>>> 6d6731963340573a8ad020e505f8900bb6eed4bc

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

<<<<<<< HEAD
export class AppComponent { 
=======
export class AppComponent {
  term: string;
  result: string;
  thing: ResultsComponent;
>>>>>>> 6d6731963340573a8ad020e505f8900bb6eed4bc

  user: Observable<firebase.User>;
  user_image = HTMLImageElement;
  public loggedIn: boolean;
  @ViewChild('sidenav') sidenav: MdSidenav;

<<<<<<< HEAD
  constructor(public afAuth: AngularFireAuth, private route: Router, private profileData: ProfileDataService) { 
    afAuth.auth.onAuthStateChanged(function(user) { //Check if the user is already logged in
      if(user){
        this.loggedIn = true;
        (<HTMLImageElement>document.getElementById('loginimage')).src = afAuth.auth.currentUser.photoURL;
        profileData.setUser(afAuth.auth.currentUser);
      }
      else{
        this.loggedIn = false;
        (<HTMLImageElement>document.getElementById('loginimage')).src = "assets/Images/account_temp.png";
        profileData.setUser(null);
      }
    });
  }


  glogin() {
    this.loggedIn = true;
    this.user = this.afAuth.authState;
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    if(this.afAuth.auth.currentUser != null){
      (<HTMLImageElement>document.getElementById('loginimage')).src = this.afAuth.auth.currentUser.photoURL;
      this.profileData.setUser(this.afAuth.auth.currentUser);
    }
    this.sidenav.close();
  }

  flogin() {
    this.loggedIn = true;
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
      this.profileData.setUser(this.afAuth.auth.currentUser);
      this.route.navigate(["../profile"]);
    }
    else{
      this.sidenav.open();
    }
    
  }

  logout(){
    this.afAuth.auth.signOut().then(function() {
      this.loggedIn = false;
      this.profileData.setUser(null);
      (<HTMLImageElement>document.getElementById('loginimage')).src = "assets/Images/account_temp.png";
    }).catch(function(error) {
    });
    this.route.navigate(["/"]);
    window.location.reload();
  }
  

}
=======
  search() {
    var temp_arr = [];
    this.searchService.search(this.term)
      .subscribe(data => {
        this.thing.result = JSON.stringify(data);
        //this.result = JSON.stringify(data);
      });
  }
}

>>>>>>> 6d6731963340573a8ad020e505f8900bb6eed4bc
