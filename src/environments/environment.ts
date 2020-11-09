// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAKiSCNHhHnk4BD1tIr6i6IoNwgPtOqDi8",
    authDomain: "andrei-hiberus.firebaseapp.com",
    databaseURL: "https://andrei-hiberus.firebaseio.com",
    projectId: "andrei-hiberus",
    storageBucket: "andrei-hiberus.appspot.com",
    messagingSenderId: "18909716543",
    appId: "1:18909716543:web:a263c54d765109e1f3988a"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
