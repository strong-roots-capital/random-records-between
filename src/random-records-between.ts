/**
 * random-records-between
 * Create a list of random records spanning given dates
 */

const datesBetween = require('dates-between')

import ow from 'ow'
import Record from 'timeseries-record'
import randomRecord from 'random-record'


/**
 * Return an array of random timeseries data between specified start
 * and end dates, inclusive.
 */
export default function randomRecordsBetween(start: Date, end: Date): Record[] {
    ow(start, ow.date.is(d => d.getTime() <= end.getTime() || `Expected \`start\` (${d}) to be before-or-equal to \`end\` (${end})`))

    let records: Record[] = []
    for (const date of datesBetween(start, end)) {
        const rec = randomRecord()
        records.push({
            Time: date.getTime(),
            Open: rec.Open,
            High: rec.High,
            Low: rec.Low,
            Close: rec.Close,
            Volume: rec.Volume
        })
    }

    return records
}
