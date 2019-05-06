
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import {
    RecordingStorageProvider,
    Recording,
} from '../../providers/recording-storage';

import {
    AlertController
} from 'ionic-angular';

import {
    SlidingWindow,
} from '../../sliding-window';

/* Returns the current time in seconds */
function getTime() {
    return (new Date()).getTime()/1000.0;
}

class SampleRecorder
{
    public samples: any;
    public startTime: number;

    constructor() {
        this.startTime = getTime();
        this.samples = []
    }

    addSample() {
        this.samples.push(getTime() - this.startTime);
    }
}

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage
{
    private beatsPerMinute: number = 0;
    private window: SlidingWindow = null;
    private longWindow: SlidingWindow = null;
    @ViewChild('chart')
    private chartCanvas;
    private chart: Chart = null;
    private maxSamples: number = 20;
    private averageBPM: number = 0;
    private sampleCount: number = 0;

    private keyHandler: any;

    private data: any;
    private avgData: any;

    private recorder: SampleRecorder = null;

    constructor(
        private navCtrl: NavController,
        private recordingStorage: RecordingStorageProvider,
        private alertCtrl: AlertController,
    )
    {
        this.window = new SlidingWindow({
            sampleLength: 4,
            timeLength: 5,
        });
        this.longWindow = new SlidingWindow({
            sampleLength: 16,
            timeLength: 12,
        });
        //this.recordingStorage.clear();
    }

    get isRecording() {
        return !!this.recorder;
    }

    setupChart()
    {
        this.avgData = [{
            x: 0,
            y: 0,
        }, {
            x: this.maxSamples,
            y: 0,
        }];
        this.data = [];
        this.chart = new Chart(this.chartCanvas.nativeElement, {
            type: 'line',
            data: {
                datasets: [
                    {
                        xAxisID: 'x-axis-bpm',
                        yAxisID: 'y-axis-bpm',
                        data: this.data,
                        borderColor: 'rgba(0,0,0,0.2)',
                        borderWidth: 5,
                    },
                    {
                        data: this.avgData,
                        borderColor: 'rgba(0,0,255,0.5)',
                        fill: false,
                        pointRadius: 0,
                        borderWidth: 2,
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                animation: {
                    duration: 300,
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        id: 'x-axis-bpm',
                        type: 'linear',
                        position: 'bottom',
                        ticks: {
                            stepSize: 1,
                            suggestedMax: this.maxSamples,
                        },
                    }],
                    yAxes: [{
                        id: 'y-axis-bpm',
                        type: 'linear',
                        ticks: {
                            min: 50,
                            max: 180,
                        },
                    }],
                },
            },
        });
    }

    ionViewDidLoad()
    {
        this.setupChart();

        this.keyHandler = event => {
            if (event.key == 'Enter') {
                this.handleClicked();
            }
        }

        document.addEventListener('keyup', this.keyHandler);
    }

    ionViewDidLeave() {
        document.removeEventListener('keyup', this.keyHandler);
    }

    addSampleToChart(bpm, avg)
    {
        // Add the new sample point
        this.data.push({
            x: this.sampleCount,
            y: +bpm.toFixed(1),
        });
        this.sampleCount++;

        // Trim old samples
        if (this.data.length > this.maxSamples) {
            this.data.shift();
        }

        // Update the (long-term) average line
        this.avgData[0].x = Math.max(this.sampleCount-this.maxSamples, 0);
        this.avgData[0].y = avg;
        this.avgData[1].x = Math.max(
            this.data[this.data.length-1].x,
            this.maxSamples
        );
        this.avgData[1].y = avg;

        this.chart.update();
    }

    handleClicked()
    {
        if (!this.isRecording) {
            this.recorder = new SampleRecorder();
        }
        
        let now = getTime()
        this.window.add(now);
        this.longWindow.add(now);
        this.recorder.addSample();

        let freq = this.window.getAverageFrequency();
        let lastPeriod = this.window.getLastPeriod();
        if (freq !== undefined && lastPeriod !== undefined)
        {
            let bpm = 60*freq;
            let avg = 60*this.longWindow.getAverageFrequency();
            let error = 60*(freq - 1.0/lastPeriod);

            this.averageBPM = bpm|0;

            this.addSampleToChart(bpm, avg);
        }
    }

    /* Saves the current recording in progress */
    private saveCurrentRecording(comment: string)
    {
        if (!this.isRecording) {
            return;
        }
        return this.recordingStorage.save(
            this.recorder.startTime,
            this.recorder.samples,
            comment,
        ).catch(error => {
            console.log('error saving:', error);
        });
    }

    /* Stops any recording currently in progress */
    private stopRecording() {
        this.recorder = null;
        this.window.clear();
        this.longWindow.clear();
    }

    handleStopClicked()
    {
        // Prompt the user to save the recording (with comment)
        let handleSave = (args) => {
            this.saveCurrentRecording(
                args.comment,
            ).then(() => {
                this.stopRecording();
            });
        };
        let alert = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Save this recording?',
            inputs: [{
                name: 'comment',
                placeholder: 'Enter a comment',
            }],
            buttons: [
                {
                    text: 'Save',
                    handler: handleSave,
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => this.stopRecording(),
                },
            ],
        });
        alert.present();
    }
}
