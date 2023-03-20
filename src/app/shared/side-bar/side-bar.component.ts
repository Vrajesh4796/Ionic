import { Component, Input, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {

    activeIndex:number = 0;
    activePageTitle:string = 'Dashboard';
    Pages = [
        {
            title: 'Dashboard',
            url: '',
            icon: 'albums',
        },
        {
            title: 'Login',
            url: '/login',
            icon: 'person',
        },
        {
            title: 'Register',
            url: '/register',
            icon: 'person',
        },
    ];

    @Input() title: string = '';

    constructor( private platform: Platform,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen) {
            this.initializeApp();
        }

    ngOnInit() {}

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
