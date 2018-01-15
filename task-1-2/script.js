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
    minYear = minYear || undefined;
    maxYear = maxYear || undefined;

    if( array.length && minYear === undefined && maxYear === undefined ) {
        console.log('Full films list:', filmsArr);
    } else if ( array.length && minYear && minYear !== undefined && minYear !== null && minYear !== 'null' && maxYear === undefined ) {
        var filmsWithMinYear =  filmsArr.filter(function (entry) {
            return entry.year >= minYear;
        });
        console.log('In the range from min year:', filmsWithMinYear);
    } else if ( minYear === null || minYear === 'null' ) {
        var filmsWithMaxYearOnly = filmsInJSON.filter(function (entry) {
            return entry.year <= maxYear;
        });
        console.log('In the range up to the maximum date:', filmsWithMaxYearOnly);
    } else if ( array.length && maxYear && maxYear !== undefined ) {
        var filmsWithMaxYear = filmsInJSON.filter(function (entry) {
            return entry.year >= minYear && entry.year <= maxYear;
        });
        console.log('In the range from the min to the max date:', filmsWithMaxYear);
    }
}
//filterByYears('array', 'null', 2000);