// Sort by year
function sortByYear() {
    var filmsArr = filmsInJSON.slice(0);

    filmsArr.sort(function(a, b) {
        return a.year - b.year;
    });
    console.log('Sort by year:', filmsArr);
}
//sortByYear();


// Filter by years
function filterByYears(array, minYear, maxYear) {
    var filmsArr = filmsInJSON.slice(0);

    // Undefined properties
    minYear = minYear || undefined || null;
    maxYear = maxYear || undefined;

    if( array.length && minYear === undefined && maxYear === undefined ) {
        console.log('Full films list:', filmsArr);
    } else if ( array.length && minYear && minYear !== undefined && minYear !== null && minYear !== 'null' && maxYear === undefined ) {
        var filmsWithMinYear =  filmsArr.filter(function (entry) {
            return entry.year >= minYear;
        });
        console.log('In the range from min year:', filmsWithMinYear);
    } else if ( minYear === null || minYear === 'null' ) {
        var filmsWithMaxYearOnly = filmsArr.filter(function (entry) {
            return entry.year <= maxYear;
        });
        console.log('In the range up to the maximum date:', filmsWithMaxYearOnly);
    } else if ( array.length && maxYear && maxYear !== undefined ) {
        var filmsWithMaxYear = filmsArr.filter(function (entry) {
            return entry.year >= minYear && entry.year <= maxYear;
        });
        console.log('In the range from the min to the max date:', filmsWithMaxYear);
    }
}
//filterByYears('array', 'null', 2000);


// Get amount by genres
function getAmountByGenres() {
    var filmsArr = filmsInJSON.slice(0);
    var holder = [];
    var genreArr = {};

    // Grub all genres
    var getAllGenres = filmsArr.forEach(function (entry) {
        holder.push(entry.genre);
    });

    // Get unique genres
    var genreHolder = holder.filter(function(item, i, ar) {
        // I have no idea about arguments and why they goes in this order
        return ar.indexOf(item) === i;
    });

    // Set new array of genres
    for (var i = 0; i < genreHolder.length; i++) {
        genreArr[genreHolder[i]] = 0;
    }

    // Calculates films
    for (var el = 0; el < holder.length; el++) {
        genreArr[holder[el]]++;
    }
    // I get a little bit of help, case i don't know, that 'key' = key in arr...)
    // I think that one of loop we can pull down...

    console.log('Get sum of each genre', genreArr);
}
//getAmountByGenres();