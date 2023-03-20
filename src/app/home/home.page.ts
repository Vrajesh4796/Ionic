import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    user:any = null;

    constructor(private route: Router) {
        if(!isPlatform('capacitor')){
            GoogleAuth.initialize();
        }
    }

    async signIn(){
        this.user = await GoogleAuth.signIn();
        if(this.user?.authentication?.accessToken){
            this.route.navigate(['/dashboard'])
        }
    }

    async refresh(){
       const authCode = await GoogleAuth.refresh();
    }

    async signOut(){
        await GoogleAuth.signOut();
        this.user = null;
     }
}
