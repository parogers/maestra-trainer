import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

import {
    RecordingStorageProvider,
    Recording,
} from '../../providers/recording-storage';

import {
    BeatEstimator,
    calculateAvg,
    calculateStddev,
} from '../../beat-estimator';

const BPM_RANGE_MIN = 60;
const BPM_RANGE_MAX = 180;

function calculateStats(rec)
{
    let averageBPM = 0, accuracy = 0;

    if (rec.samples.length > 0)
    {
        let avgPeriod = calculateAvg(rec.samples);
        let filtered = rec.samples.filter(
            sample => sample < 3*avgPeriod
        );

        avgPeriod = calculateAvg(filtered);
        averageBPM = 60.0/avgPeriod;

        if (rec.samples.length > 1)
        {
            let stddev = calculateStddev(filtered, avgPeriod);
            accuracy = (1-2*stddev/avgPeriod)*100;
        }
    }

    return {
        averageBPM: averageBPM,
        accuracy: accuracy,
    }
}

function formatDuration(rec) {
    // TODO - handle minutes
    let seconds = rec.samples.reduce((acc, period) => acc + period);
    return Math.round(seconds) + 's';
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
                    },
                }],
                yAxes: [{
                    type: 'linear',
                    ticks: {
                        min: BPM_RANGE_MIN,
                        max: BPM_RANGE_MAX,
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

    showRecordingsInfo(recordings: Recording[])
    {
        function byTime(r1, r2) {
            if (r1.timestamp < r2.timestamp) return -1;
            if (r1.timestamp > r2.timestamp) return 1;
            return 0;
        }
        this.recordings = recordings.sort(byTime).reverse().map(
            rec => {
                let stats = calculateStats(rec);
                return {
                    duration: formatDuration(rec),
                    date: formatDate(rec),
                    comment: rec.comment,
                    recording: rec,
                    averageBPM: Math.round(stats.averageBPM),
                    accuracy: Math.round(stats.accuracy),
                };
            }
        );
    }

    ionViewWillEnter()
    {
        // Start loading all recordings from the db
        this.recordingStorage.loadAll().then(
            recordings => {
                this.showRecordingsInfo(recordings);
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
        this.selected = info;
        let list = [];
        let count = 0;
        for (let period of info.recording.samples)
        {
            if (period !== 0) {
                let bpm = 60/period;
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
