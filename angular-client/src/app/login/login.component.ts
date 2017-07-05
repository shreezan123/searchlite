import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) { this.user = afAuth.authState; }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log(this.afAuth);
  }

  logout() {
    this.afAuth.auth.signOut();
  }


}
