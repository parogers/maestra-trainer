import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const RECORDING_PREFIX = 'RS_RECORD_';

export interface Recording
{
    // Time of start of recording (local time)
    timestamp: number;
    // Samples collected during recording. (relative to the recording start
    // time) Each sample represents a single tap.
    samples: any;
    // The user comment attached to this recording
    comment: string;
}

function makeKey(rec: Recording) {
    return RECORDING_PREFIX + (rec.timestamp|0);
}

@Injectable()
export class RecordingStorageProvider
{
    constructor(private storage: Storage) {
    }

    /* Saves a recording into local storage, using the recording timestamp to
     * uniquely identify the record. (or updates the record if it already 
     * exists) Returns a promise that resolves to 'true' on success. */
    save(rec: Recording) : Promise<any>
    {
        return this.storage.put(
            makeKey(rec),
            JSON.stringify(rec)
        ).then(() => {
            return true;
        });
    }

    loadAll() : Promise<Recording[]>
    {
        let list = [];
        return this.storage.forEach((value, key) => {
            if (key.startsWith(RECORDING_PREFIX)) {
                list.push(value);
            }

        }).then(() => {
            return <Recording[]>value;
        });
    }

    clear() {
        this.storage.clear();
    }
}
