import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {
    RecordingStorageProvider,
    Recording,
} from '../../providers/recording-storage';

@Component({
    selector: 'page-review',
    templateUrl: 'review.html'
})
export class ReviewPage
{
    private recordings: Recording[] = null;
    
    constructor(
        private navCtrl: NavController,
        private recordingStorage: RecordingStorageProvider,
    ) {
    }

    ionViewDidLoad()
    {
        function byTime(r1, r2) {
            if (r1.timestamp < r2.timestamp) return -1;
            if (r1.timestamp > r2.timestamp) return 1;
            return 0;
        }

        this.recordingStorage.loadAll().then(
            recordings => {
                this.recordings = recordings.sort(byTime);
            }
        );
        
    }

    formatDuration(rec) {
        return Math.round(rec.samples[rec.samples.length-1]) + 's';
    }

    formatDate(rec)
    {
        let date = new Date(rec.timestamp*1000);
        return '' +
            date.getFullYear() + '/' +
            (date.getMonth()+1) + '/' +
            date.getDate() + ' at ' +
            date.getHours() + ':' +
            date.getMinutes();
    }

    handleRecordingClicked(rec) {
        console.log(rec);
    }
}
