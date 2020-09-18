import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Version } from '../../version';

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    constructor(public navCtrl: NavController) {

    }

    get version() {
        return Version.NUMBER;
    }

}
