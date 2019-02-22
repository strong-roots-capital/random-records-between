import test from 'ava'

import * as moment from 'moment'

/**
 * Library under test
 */

import randomRecordsBetween from '../src/random-records-between'

const testDays = [0, 1, 5, 10, 50, 100, 500, 1000]


test('should return one record when start equals end', t => {
    const records = randomRecordsBetween(new Date(), new Date())
    t.is(records.length, 1)
})

test('should throw an error if end precedes start', t => {
    const error = t.throws(() => {
        randomRecordsBetween(new Date(), moment.utc(new Date()).subtract(1, 'days').toDate())
    }, Error)
    t.is(error.name, 'ArgumentError')
})


const shouldReturnAsManyRecordsAsDaysBetweenDates = (t: any, days: number) => {
    const start = moment.utc().startOf('day')
    const end = start.clone().add(days, 'days')
    const records = randomRecordsBetween(start.toDate(), end.toDate())
    t.is(days + 1, records.length)
}
shouldReturnAsManyRecordsAsDaysBetweenDates.title = (_ = '', days: number) => `should return ${days+1} records when start and end are ${days} days apart`
testDays.forEach(numDays => test(shouldReturnAsManyRecordsAsDaysBetweenDates, numDays))


const datesShouldBe24HoursApart = (t: any, days: number) => {
    const start = moment.utc().startOf('day')
    const end = start.clone().add(days, 'days')
    let records = randomRecordsBetween(start.toDate(), end.toDate())

    const current = start.clone()
    while (current.isSameOrBefore(end)) {
        const record = records.shift()!
        t.deepEqual(current.valueOf(), record.Time)
        current.add(1, 'day')
    }
    t.is(records.length, 0)
}
datesShouldBe24HoursApart.title = (_ = '', days: number) => `${days} days should all be 24 hours apart`
testDays.forEach(numDays => test(datesShouldBe24HoursApart, numDays))


const datesShouldBeginWithStart = (t: any, days: number) => {
    const start = moment.utc().startOf('day')
    const end = start.clone().add(days, 'days')
    let records = randomRecordsBetween(start.toDate(), end.toDate())
    t.true(start.isSame(new Date(records[0].Time)))
}
datesShouldBeginWithStart.title = (_ = '', days: number) => `first of ${days} records should begin with desired starting dates`
testDays.forEach(numDays => test(datesShouldBeginWithStart, numDays))


const datesShouldNotExceedEnd = (t: any, days: number) => {
    const start = moment.utc().startOf('day')
    const end = start.clone().add(days, 'days')
    let records = randomRecordsBetween(start.toDate(), end.toDate())
    t.true(end.isSameOrAfter(new Date(records[records.length - 1].Time)))
}
datesShouldNotExceedEnd.title = (_ = '', days: number) => `last of ${days} records should not exceed with desired end date`
testDays.forEach(numDays => test(datesShouldNotExceedEnd, numDays))


const shouldHaveARecordForEveryDayBetweenStartAndEnd = (t: any, days: number) => {
    const start = moment.utc().startOf('day')
    const end = start.clone().add(days, 'day')
    const expectedDate = start.clone()

    const randomRecords = randomRecordsBetween(start.toDate(), end.toDate())
    randomRecords.forEach(record => {
        t.is(record.Time, expectedDate.valueOf())
        expectedDate.add(1, 'day')
    })
}
shouldHaveARecordForEveryDayBetweenStartAndEnd.title = (_ = '', days: number) => `should have one record for each 24 hour period between start and end for all ${days} days`
testDays.forEach(numDays => test(shouldHaveARecordForEveryDayBetweenStartAndEnd, numDays))
