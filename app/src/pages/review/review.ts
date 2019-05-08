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


function formatDuration(rec) {
    return Math.round(rec.samples[rec.samples.length-1]) + 's';
}

function formatDate(rec)
{
    let date = new Date(rec.timestamp*1000);
    return '' +
        date.getFullYear() + '/' +
        (date.getMonth()+1) + '/' +
        date.getDate() + ' at ' +
        date.getHours() + ':' +
        date.getMinutes();
}

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
            animation: {
                duration: 200,
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


interface RecordingInfo {
    date: string;
    duration: string;
    comment: string;
    recording: Recording;
}


@Component({
    selector: 'page-review',
    templateUrl: 'review.html'
})
export class ReviewPage
{
    private recordings: RecordingInfo[] = null;
    private chart: Chart;
    private selected: RecordingInfo = null;

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

    get hasSavedRecordings()
    {
        if (this.recordings === null) {
            return false;
        }
        return this.recordings.length > 0;
    }

    showRecordings(recordings: Recording[])
    {
        function byTime(r1, r2) {
            if (r1.timestamp < r2.timestamp) return -1;
            if (r1.timestamp > r2.timestamp) return 1;
            return 0;
        }
        this.recordings = recordings.sort(byTime).reverse().map(
            rec => {
                return {
                    duration: formatDuration(rec),
                    date: formatDate(rec),
                    comment: rec.comment,
                    recording: rec,
                };
            }
        );
    }

    ionViewWillEnter()
    {
        // Start loading all recordings from the db
        this.recordingStorage.loadAll().then(
            recordings => {
                this.showRecordings(recordings);
            }
        );
        this.chart = createChart(this.chartCanvas.nativeElement);
        this.selected = null;
    }

    isSelected(info: RecordingInfo)
    {
        return (
            this.selected &&
            this.selected.recording.timestamp === info.recording.timestamp
        );
    }

    handleRecordingClicked(info: RecordingInfo)
    {
        let window = new SlidingWindow({
            sampleLength: 4,
            timeLength: 4,
        });
        let list = [];

        this.selected = info;

        let count = 0;
        for (let time of info.recording.samples)
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
