import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 

  user: Observable<firebase.User>;
  user_image = HTMLImageElement;

  constructor(public afAuth: AngularFireAuth) { this.user = afAuth.authState; }

  glogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    if(this.afAuth.auth.currentUser.photoURL != null)
      (<HTMLImageElement>document.getElementById('loginimage')).src = this.afAuth.auth.currentUser.photoURL;
  }

  flogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    if(this.afAuth.auth.currentUser.photoURL != null)
      (<HTMLImageElement>document.getElementById('loginimage')).src = this.afAuth.auth.currentUser.photoURL;
    
  }

}