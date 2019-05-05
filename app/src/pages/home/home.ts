
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

/* Returns the current time in seconds */
function getTime() {
    return (new Date()).getTime()/1000.0;
}

class SlidingWindow
{
    private values: any;
    private sampleLength: number;
    private timeLength: number;
    
    constructor(args) {
        this.values = [];
        this.sampleLength = args.sampleLength || 10;
        this.timeLength = args.timeLength || 5;
    }

    add(timestamp)
    {
        let start = getTime() - this.timeLength;
        this.values.push(timestamp)
        this.values = this.values.slice(-this.sampleLength);
        this.values = this.values.filter(
            value => value >= start
        );
    }

    getAverageFrequency()
    {
        let period = this.getAveragePeriod();
        if (period == 0) {
            return undefined;
        }
        return 1.0/period;
    }

    getAveragePeriod()
    {
        if (this.values.length <= 1) {
            return null;
        }
        
        let sum = 0;
        for (let n = 1; n < this.values.length; n++) {
            sum += this.values[n]-this.values[n-1];
        }
        return sum / (this.values.length-1);
    }

    getLastPeriod()
    {
        if (this.values.length < 2) {
            return undefined;
        }
        let last = this.values[this.values.length-1];
        let slast = this.values[this.values.length-2];
        return last-slast;
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
    @ViewChild('chart') private chartCanvas;
    private chart: Chart = null;
    private startTime: number = 0;
    private maxSamples: number = 20;
    private averageBPM: number = 0;

    constructor(public navCtrl: NavController)
    {
        this.window = new SlidingWindow({
            sampleLength: 8,
            timeLength: 5,
        });
        this.longWindow = new SlidingWindow({
            sampleLength: 16,
            timeLength: 12,
        });
        this.sampleCount = 0;
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
                        label: 'bpm',
                        xAxisID: 'x-axis-bpm',
                        yAxisID: 'y-axis-bpm',
                        data: this.data,
                        borderColor: 'rgba(0,0,0,0.2)',
                        borderWidth: 5,
                    },
                    {
                        label: 'avg',
                        data: this.avgData,
                        borderColor: 'rgba(0,0,255,0.5)',
                        fill: false,
                        pointRadius: 0,
                        borderWidth: 2,
                    },
                ],
            },
            options: {
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
        this.startTime = getTime();
        this.setupChart();

        this.keyHandler = event => {
            if (event.key == 'Enter') {
                this.handleClicked();
            }
        }

        document.addEventListener('keyup', this.keyHandler);

        /*let tick = () => {
            setTimeout(tick, 500);
        }
        setTimeout(tick, 500);*/
    }

    ionViewDidLeave() {
        document.removeEventListener('keyup', this.keyHandler);
    }

    addSampleToChart(bpm, avg)
    {
        // Add the new sample point
        this.data.push({
            x: this.sampleCount,
            y: bpm,
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
        let now = getTime()
        this.window.add(now);
        this.longWindow.add(now);

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
}
