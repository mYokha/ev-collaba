// Sort by year
function sortByYear() {
    //var byDate = filmsInJSON.slice(0);

    filmsInJSON.sort(function(a, b) {
        return a.year - b.year;
    });
    //console.log('Sort by year:', filmsInJSON);
}
sortByYear();


// Filter by year
function filterByYear(array, minYear, maxYear) {

}
filterByYear(array, null, 2000);