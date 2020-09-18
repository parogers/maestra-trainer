/*
 * Maestra trainer - Practice counting the beat
 *
 * Copyright 2020 Peter Rogers (peter.rogers@gmail.com)
 */

import { Component, OnInit } from '@angular/core';


export interface Recording
{
    // Time of start of recording (local time)
    timestamp: number;
    // Samples collected during recording (inter-tap time periods in seconds)
    samples: any;
    // The user comment attached to this recording
    comment: string;
}


interface RecordingInfo {
    date: string;
    duration: string;
    comment: string;
    recording: Recording;
}


@Component({
    selector: 'app-review',
    templateUrl: './review.page.html',
    styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit
{
    constructor() { }

    ngOnInit() {
    }

    get haveSavedRecordings() : boolean
    {
        return true;
    }

    isSelected(rec : RecordingInfo)
    {
        return rec.date === '2020-01-01';
    }

    get recordings() : RecordingInfo[]
    {
        return [
            {
                date: '2020-01-01',
                duration: '10 s',
                comment: 'This is a test',

                averageBPM: 123,
                accuracy: 1,
                averageJitter: 2,
                lowerBPM: 3,
                upperBPM: 4,
            },
            {
                date: '2020-01-10',
                duration: '60 s',
                comment: 'This is another test',

                averageBPM: 123,
                accuracy: 1,
                averageJitter: 2,
                lowerBPM: 3,
                upperBPM: 4,
            }
        ];
    }
}
