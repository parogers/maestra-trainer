
export function calculateStddev(samples, avg)
{
    if (samples.length <= 1) {
        return 0;
    }
    let sum = samples.reduce(
        (acc, sample) => acc + Math.pow(sample-avg, 2)
    );
    return Math.sqrt(sum) / (samples.length-1);
}

export function calculateAvg(samples)
{
    if (samples.length === 0) {
        return 0;
    }
    return samples.reduce((acc, sample) => acc + sample) / samples.length;
}

export class BeatEstimator
{
    // The list of recorded beat times
    private timestamps: any;
    // The maximum number of timestamps to keep
    private sampleLength: number;
    private timeLength: number;
    // A running average of the inter-beat time periods
    private averagePeriod: number;
    
    constructor(args)
    {
        this.sampleLength = args.sampleLength || 10;
        this.timeLength = args.timeLength || 5;
        this.clear();
    }

    clear() {
        this.averagePeriod = 0;
        this.timestamps = [];
    }

    add(timestamp)
    {
        this.timestamps.push(timestamp)
        this.timestamps = this.timestamps.slice(-this.sampleLength);

        // Trim the window based on real-time
        let start = timestamp - this.timeLength;
        this.timestamps = this.timestamps.filter(
            value => value >= start
        );

        let periods = [];
        for (let n = 1; n < this.timestamps.length; n++) {
            periods.push(this.timestamps[n] - this.timestamps[n-1]);
        }
        this.averagePeriod = calculateAvg(periods);
    }

    getAverageFrequency()
    {
        let period = this.getAveragePeriod();
        if (period === 0) {
            return undefined;
        }
        return 1.0/period;
    }

    getAveragePeriod()
    {
        return this.averagePeriod;
    }
}
