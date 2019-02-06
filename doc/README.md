
random-records-between [![Build status](https://travis-ci.org/strong-roots-capital/random-records-between.svg?branch=master)](https://travis-ci.org/strong-roots-capital/random-records-between) [![npm version](https://img.shields.io/npm/v/random-records-between.svg)](https://npmjs.org/package/random-records-between) [![codecov](https://codecov.io/gh/strong-roots-capital/random-records-between/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/random-records-between)
=============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Create a list of random records spanning given dates

Install
-------

```shell
npm install random-records-between
```

Use
---

```typescript
import randomRecordsBetween from 'random-records-between'

import Record from 'timeseries-record'

const records: Record[] = randomRecordsBetween(new Date(), new Date())
// records.length == 1
```

Related
-------

*   [timeseries-record](https://github.com/strong-roots-capital/timeseries-record)
*   [random-record](https://github.com/strong-roots-capital/random-record)

## Index

### Functions

* [randomRecordsBetween](#randomrecordsbetween)

---

## Functions

<a id="randomrecordsbetween"></a>

###  randomRecordsBetween

▸ **randomRecordsBetween**(start: *`Date`*, end: *`Date`*): `Record`[]

*Defined in [random-records-between.ts:17](https://github.com/strong-roots-capital/random-records-between/blob/b0a8897/src/random-records-between.ts#L17)*

Return an array of random timeseries data between specified start and end dates, inclusive.

**Parameters:**

| Name | Type |
| ------ | ------ |
| start | `Date` |
| end | `Date` |

**Returns:** `Record`[]

___

