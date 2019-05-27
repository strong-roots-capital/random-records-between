# random-records-between [![Build status](https://travis-ci.org/strong-roots-capital/random-records-between.svg?branch=master)](https://travis-ci.org/strong-roots-capital/random-records-between) [![npm version](https://img.shields.io/npm/v/random-records-between.svg)](https://npmjs.org/package/random-records-between) [![codecov](https://codecov.io/gh/strong-roots-capital/random-records-between/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/random-records-between)

> Create a list of random 1D records spanning given dates

## Install

``` shell
npm install random-records-between
```

## Use

``` typescript
import randomRecordsBetween from 'random-records-between'

import Record from 'timeseries-record'

const records: Record[] = randomRecordsBetween(new Date(), new Date())
// records.length == 1
```

## Related

- [timeseries-record](https://github.com/strong-roots-capital/timeseries-record)
- [random-record](https://github.com/strong-roots-capital/random-record)
