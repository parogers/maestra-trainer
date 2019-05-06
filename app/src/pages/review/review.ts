import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

import {
    RecordingStorageProvider,
    Recording,
} from '../../providers/recording-storage';

import {
    SlidingWindow,
} from '../../sliding-window';

@Component({
    selector: 'page-review',
    templateUrl: 'review.html'
})
export class ReviewPage
{
    private recordings: Recording[] = null;
    private chart: Chart;
    private selectedRecording: Recording = null;

    @ViewChild('chart')
    private chartCanvas;
    
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

        this.chart = new Chart(this.chartCanvas.nativeElement, {
            type: 'line',
            data: {
                datasets: [],
            },
            options: {
                legend: {
                    display: false,
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom',
                        ticks: {
                            stepSize: 1,
                        },
                    }],
                    yAxes: [{
                        type: 'linear',
                    }],
                },
            },
        });
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

    isSelected(rec)
    {
        return (
            this.selectedRecording &&
            this.selectedRecording.timestamp === rec.timestamp
        );
    }

    handleRecordingClicked(rec)
    {
        let window = new SlidingWindow({
            sampleLength: 4,
            timeLength: 4,
        });
        let list = [];

        this.selectedRecording = rec;

        for (let time of rec.samples)
        {
            window.add(time);
            list.push({
                x: time,
                y: 60*window.getAverageFrequency(),
            });
        }
        
        this.chart.data.datasets = [
            {
                data: list,
            }
        ]

        this.chart.update();
    }
}
