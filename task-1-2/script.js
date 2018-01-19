// Basic array methods

// Create function *sortByYear* that accepts films array and returns array __sorted by year__
const sortByYear = arr => arr.sort((a, b) => a.year - b.year)
// console.log(sortByYear(filmsInJSON))

// Create function *filterByYears* that has three parametrs (array, minYear, maxYear) but only
// first one is required. If we only pass array it just returns it. If we pass second parameter
// it filters it by __minimum release year__, if we pass min and max it filters __between these
// two years__. Also we can pass (array, null, 2000) that should return __all films before 2000__.

const filterByYears = (array, minYear, maxYear) => {
    if (minYear && !maxYear) {
        return array.filter(el => el.year >= minYear)
    } else if (!minYear && maxYear) {
        return array.filter(el => el.year <= maxYear)
    } else if (minYear && maxYear) {
        return array.filter(el => el.year >= minYear && el.year <= maxYear)
    }
    return array
}

// console.log(filterByYears(filmsInJSON))
// console.log(filterByYears(filmsInJSON, 1995))
// console.log(filterByYears(filmsInJSON, 1995, 1999))
