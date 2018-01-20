// Basic array methods

// Create function *sortByYear* that accepts films array and returns array sorted by year
const sortByYear = arr => arr.sort((a, b) => a.year - b.year)
// console.log(sortByYear(filmsInJSON))

// Create function *filterByYears* that has three parametrs (array, minYear, maxYear) but only
// first one is required. If we only pass array it just returns it. If we pass second parameter
// it filters it by minimum release year, if we pass min and max it filters between these
// two years. Also we can pass (array, null, 2000) that should return all films before 2000.

const filterByYears = (array, minYear, maxYear) => {
    if (minYear && !maxYear) return array.filter(el => el.year >= minYear)
    if (!minYear && maxYear) return array.filter(el => el.year <= maxYear)
    if (minYear && maxYear) return array.filter(el => el.year >= minYear && el.year <= maxYear)
    return array
}

// console.log(filterByYears(filmsInJSON))
// console.log(filterByYears(filmsInJSON, 1995))
// console.log(filterByYears(filmsInJSON, 1995, 1999))

// Create function *getAmountByGenres* that calculates how many films of each genre are in the
// array and returns an object like { drama: 5, comedy: 10, ... }

const getAmountByGenres = arr => arr.reduce((genres, film) => {
    genres[film.genre] ? genres[film.genre]++ : (genres[film.genre] = 1)
    return genres
}, {})

// console.log(getAmountByGenres(filmsInJSON))


// Create function getTotalDuration that returns total amount of films duration
const getTotalDuration = arr => arr.reduce((totalDur, film) => totalDur += film.duration, 0)

// console.log(getTotalDuration(filmsInJSON))
