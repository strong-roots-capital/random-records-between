import test from 'ava'

import moment from 'moment'

/**
 * Library under test
 */

import randomRecordsBetween from '../src/random-records-between'

test('should return one record when start equals end', t => {
    const records = randomRecordsBetween(new Date(), new Date())
    t.is(records.length, 1)
})

test('should return as many records as days between dates', t => {
    const testDays = [1, 5, 10, 100]
    for (const numDays of testDays) {
        const records = randomRecordsBetween(new Date(), moment().add(numDays, 'days').toDate())
        t.is(records.length, numDays + 1)
    }
})

test('should throw an error if end precedes start', t => {
    const error = t.throws(() => {
        randomRecordsBetween(new Date(), moment().subtract(1, 'days').toDate())
    }, Error)
    t.is(error.name, 'ArgumentError')
})
