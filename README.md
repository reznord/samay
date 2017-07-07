
# <img alt="samay" src="samay.png" width="240px">
A lite version of moment

[![dependencies Status](https://david-dm.org/vihangpatel/samay/status.svg)](https://david-dm.org/vihangpatel/samay)
[![devDependencies Status](https://david-dm.org/vihangpatel/samay/dev-status.svg)](https://david-dm.org/vihangpatel/samay?type=dev)


## Functions used in the library:

#### Formatting & parsing functions

`calcDate(structuredDate) - returns calculated date format`

`parseDate(strDate) - returns parse date(Bydefault parses into GMT time, so need +05:30 for IST conversion)`

`parseDateTime(strDate) - parses Date time (Function for format 20170317)`

`addDays(sourceDate, days) -  Adds number of days from the source date and return the date adding x days`

`getDayName(dateObj, options = {}) - Returns day name eg Sunday', 'Monday' If short is passed as an option Return Tues else Tuesday`

#### Add & Subtract functions

`_subtract(value, type)` - Return samay instance according to the value and type passed

`_add(value, type)` - Return samay instance according to the value and type passed`

#### Compare functions

`isPastDate(date1,date2) - compares given 2 dates. (compares whether the date1 is past date from date2)`
