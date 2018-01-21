// Basic array methods

// Create function *sortByYear* that accepts films array and returns array
// sorted by year
const sortByYear = arr => arr.sort((a, b) => a.year - b.year)

// console.log(sortByYear(filmsInJSON))

// Create function *filterByYears* that has three parametrs (array, minYear,
// maxYear) but only first one is required. If we only pass array it just
// returns it. If we pass second parameter it filters it by minimum release
// year, if we pass min and max it filters between these two years. Also we can
// pass (array, null, 2000) that should return all films before 2000.
const filterByYears = (array, minYear, maxYear) => {
  if (minYear && !maxYear) return array.filter(el => el.year >= minYear)
  if (!minYear && maxYear) return array.filter(el => el.year <= maxYear)
  if (minYear && maxYear) return array.filter(el => el.year >= minYear && el.year <= maxYear)
  return array
}

// console.log(filterByYears(filmsInJSON))
// console.log(filterByYears(filmsInJSON, 1995))
// console.log(filterByYears(filmsInJSON, 1995, 1999))

// Create function *getAmountByGenres* that calculates how many films of each
// genre are in the array and returns an object like
// { drama: 5, comedy: 10, ... }
const getAmountByGenres = arr => arr.reduce((genres, film) => {
  genres[film.genre] ? genres[film.genre]++ : (genres[film.genre] = 1)
  return genres
}, {})

// console.log(getAmountByGenres(filmsInJSON))


// Create function getTotalDuration that returns total amount of films duration
const getTotalDuration = arr => arr
  .reduce((totalDur, film) => totalDur += film.duration, 0)

// console.log(getTotalDuration(filmsInJSON))


// Create function getTotalCommentsByFilm that takes a second parameter as a
// film id and returns total amount of comments by film
const getTotalCommentsByFilm = (filmsArr, filmId) => filmsArr
  .find(film => film.id === filmId).comments.length

// console.log(getTotalCommentsByFilm(filmsInJSON, 3))

// Create function getCommentsByAuthorId that takes second parameter as authorId
// and returns an array of comments by suggested author


// Version with forEach
const getCommentsByAuthorId0 = (filmsArr, authorId) => {
  const resArr = []
  filmsArr.forEach(film => film
    .comments.forEach(comment => {
      if (comment.authorId === authorId) {
        resArr.push(comment)
      }
    })
  )
  return resArr
}
// console.log(getCommentsByAuthorId0(filmsInJSON, 1003))

// Version using spread operator and reduce
const getCommentsByAuthorId = (filmsArr, authorId) => filmsArr
  .reduce((comments, film) => ([
      ...comments,
      ...film.comments.filter(comment => comment.authorId === authorId)
    ]), [])

// console.log(getCommentsByAuthorId(filmsInJSON, 1003))

// Create function getRatingByFilmId, second parameter is filmId. Returns
// average rating with one number after point
const getRatingByFilmId = (filmsArr, filmId) => {
  const { comments } = filmsArr.find(film => film.id === filmId)
  const sumRating = comments.reduce((sum, comment) => sum += comment.rating, 0)

  return (sumRating / comments.length).toFixed(1)
}

// console.log(getRatingByFilmId(filmsInJSON, 8))

// Create function sortByRating that returns the same array of films sorted by
// rating in descending order
const getFilmRating = film => {
  const sumRating = film.comments
  .reduce((sum, comment) => sum += comment.rating, 0) || -1

  return (sumRating / film.comments.length).toFixed(1)
}

const sortByRating = filmsArr => filmsArr
  .sort((film1, film2) => getFilmRating(film2) - getFilmRating(film1))

  // console.log(sortByRating(filmsInJSON))
