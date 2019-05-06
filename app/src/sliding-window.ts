
export class SlidingWindow
{
    private values: any;
    private sampleLength: number;
    private timeLength: number;
    
    constructor(args) {
        this.values = [];
        this.sampleLength = args.sampleLength || 10;
        this.timeLength = args.timeLength || 5;
    }

    clear() {
        this.values = [];
    }

    add(timestamp)
    {
        // Trim the window based on number of samples
        this.values.push(timestamp)
        this.values = this.values.slice(-this.sampleLength);

        // Trim the window based on real-time
        let start = timestamp - this.timeLength;
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

