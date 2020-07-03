import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private authState: any;
  constructor(private afAuth: AngularFireAuth ,private router: Router , private db: AngularFireDatabase,) {
    }    
    authUser() {
      return this.user;
    }
    // get currentUserId(): string {
    //   return this.authState !== null ? this.authState.uid : '';
    // }
    login(email: string, password: string) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          this.authState = user;
          
          this.router.navigate(['/home/tab1']);
        })
        
    }
    signUp(email: string, password: string) {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((user) => {
        this.authState = user;

      }).catch(error =>{ 
      console.log(error);
    });
      
    }
 lwg(){
  return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  .then((user) => {
    this.authState = user;
    this.router.navigate(['/home/tab1']);
 })


}
lwf(){
  return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  .then((res) => {
    this.authState = res;
    this.router.navigate(['/home/tab1']);
 }) 
}
}
