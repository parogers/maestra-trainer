import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const RECORDING_PREFIX = 'RS_RECORD_';

export interface Recording
{
    // Time of start of recording (local time)
    timestamp: number;
    // Samples collected during recording (inter-tap time periods in seconds)
    samples: any;
    // The user comment attached to this recording
    comment: string;
}

function makeKey(rec: Recording) {
    return RECORDING_PREFIX + (rec.timestamp|0);
}

/* A service for storing and retreiving Recording instances */
@Injectable()
export class RecordingStorageProvider
{
    constructor(private storage: Storage) {
    }

    /* 
     * Saves a recording into local storage, using the recording timestamp to
     * uniquely identify the record. (or updates the record if it already 
     * exists) Returns a promise that resolves to the Recording on success. 
     */
    save(startTime: number, samples: any, comment: string) : Promise<any>
    {
        let rec = {
            timestamp: startTime,
            comment: comment,
            samples: samples,
        };
        return this.storage.set(
            makeKey(rec),
            JSON.stringify(rec)
        ).then(() => {
            return rec;
        });
    }

    /* Remove a recording from storage. Returns a promise that resolves
     * when it's removed. */
    remove(recording: Recording)
    {
        let key = makeKey(recording);
        return this.storage.remove(key);
    }

    /* Loads all Recording instances from storage and returns them 
     * (via promise) */
    loadAll() : Promise<Recording[]>
    {
        let recordings = [];
        return this.storage.forEach((value, key) => {
            if (key.startsWith(RECORDING_PREFIX)) {
                recordings.push(value);
            }

        }).then(() => {
            return <Recording[]>recordings.map(rec => {
                return JSON.parse(rec);
            });

        }).catch(error => {
            console.log('error loading recordings:', error);
            return <Recording[]>[];
        });
    }

    clear() {
        this.storage.clear();
    }
}
