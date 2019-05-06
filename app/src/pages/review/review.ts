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


function createChart(element)
{
    return new Chart(element, {
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
                        suggestedMin: 0,
                        suggestedMax: 10,
                    },
                }],
                yAxes: [{
                    type: 'linear',
                    ticks: {
                        min: 30,
                        max: 200,
                    },
                }],
            },
        },
    });
}


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

    /* Returns true if there are (definitely) no saved recordings in the database. Otherwise
     * this function returns false. (ie either there are recordings, or there _may_ be
     * recordings but we don't know yet) */
    get noSavedRecordings()
    {
        if (this.recordings === null) {
            return false;
        }
        return this.recordings.length === 0;
    }

    ionViewWillEnter()
    {
        // Start loading all recordings from the db
        function byTime(r1, r2) {
            if (r1.timestamp < r2.timestamp) return -1;
            if (r1.timestamp > r2.timestamp) return 1;
            return 0;
        }

        this.recordingStorage.loadAll().then(
            recordings => {
                this.recordings = recordings.sort(byTime).reverse();
            }
        );
        this.chart = createChart(this.chartCanvas.nativeElement);
        this.selectedRecording = null;
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

        let count = 0;
        for (let time of rec.samples)
        {
            window.add(time);

            let freq = window.getAverageFrequency();
            if (freq !== undefined) {
                let bpm = 60*freq;
                list.push({
                    x: count,
                    y: +bpm.toFixed(1),
                });
                count++;
            }
        }
        
        this.chart.data.datasets = [
            {
                label: 'bpm',
                data: list,
            }
        ]

        this.chart.update();
    }
}
