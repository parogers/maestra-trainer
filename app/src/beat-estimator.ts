
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

/* Returns an array of the differences between adjacient samples in the given array */
export function differences(samples)
{
    let list = [];

    for (let n = 1; n < samples.length; n++) {
        list.push(samples[n] - samples[n-1]);
    }
    return list;
}

export function calculateStats(rec)
{
    let averageBPM = 0, accuracy = 0, averageJitter = 0, stddevBPM = 0;
    let lowerBPM = 0, upperBPM = 0;

    if (rec.samples.length > 0)
    {
        // Discard long periods that fall well outside of the average value
        // (these likely represent the user taking a break/adjusting the phone etc)
        let avgPeriod = calculateAvg(rec.samples);
        let filtered = rec.samples.filter(
            sample => sample < 3*avgPeriod
        );

        // Calculate the (revised) average bpm
        avgPeriod = calculateAvg(filtered);
        averageBPM = 60.0/avgPeriod;

        // Calculate the standard deviation to get a sense of accuracy
        if (rec.samples.length > 1)
        {
            let stddev = calculateStddev(filtered, avgPeriod);
            accuracy = (1-2*stddev/avgPeriod)*100;
            lowerBPM = 60.0 / (avgPeriod + 2*stddev);
            upperBPM = 60.0 / (avgPeriod - 2*stddev);
        }

        // Calculate the average jitter (difference between adjacient periods)
        averageJitter = 100*calculateAvg(
            differences(filtered).map(
                sample => Math.abs(sample)
            )
        ) / avgPeriod;
    }

    return {
        lowerBPM: lowerBPM,
        upperBPM: upperBPM,
        averageBPM: averageBPM,
        averageJitter: averageJitter,
        accuracy: accuracy,
    }
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

        this.averagePeriod = calculateAvg(differences(this.timestamps));
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
