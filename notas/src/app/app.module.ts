import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"notas-f03cc","appId":"1:1022602080652:web:1cb1a1741cdec37f08a6a9","storageBucket":"notas-f03cc.appspot.com","apiKey":"AIzaSyAJ9gWBnzVmj1V_SyxH_P3jtiZR9JSnIXA","authDomain":"notas-f03cc.firebaseapp.com","messagingSenderId":"1022602080652"})),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
