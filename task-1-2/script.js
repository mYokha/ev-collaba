// Basic array methods

// Create function sortByYear that accepts films array and returns array
// sorted by year
const sortByYear = arr => arr.sort((a, b) => a.year - b.year)

// console.log(sortByYear(filmsInJSON))

// Create function filterByYears that has three parametrs (array, minYear,
// maxYear) but only first one is required. If we only pass array it just
// returns it. If we pass second parameter it filters it by minimum release
// year, if we pass min and max it filters between these two years. Also we can
// pass (array, null, 2000) that should return all films before 2000.
const filterByYears = (array, minYear, maxYear) => {
  if (minYear && !maxYear) return array
    .filter(el => el.year >= minYear)
  if (!minYear && maxYear) return array
    .filter(el => el.year <= maxYear)
  if (minYear && maxYear) return array
    .filter(el => el.year >= minYear && el.year <= maxYear)
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
const getFilmRating = comments => {
  const totalRating = comments
  .reduce((sum, comment) => sum += comment.rating, 0)

  return comments.length
    ? (totalRating / comments.length).toFixed(1)
    : -1
}

const sortByRating = filmsArr => filmsArr
  .sort((film1, film2) => {
    return getFilmRating(film2.comments) - getFilmRating(film1.comments)
  })

// console.log(sortByRating(filmsInJSON))

// Create function removeFilm with second parameter filmId that returns array
// without mentioned film
const removeFilm = (filmsArr, filmId) => filmsArr
  .filter(film => film.id !== filmId)

// console.log(removeFilm(filmsInJSON, 3))

// Create function removeComment with second parameter filmId and third
// parameter commentId that returns array of films without mentioned comment
// of film.
const removeComment = (filmsArr, filmId, commentId) => filmsArr
  .map(film => {
    if (film.id === filmId) {
      film.comments = film.comments.filter(comment => comment.id !== commentId)
    }

    return film
  })

// console.log(removeComment(filmsInJSON, 3, 1))

// Create function addFilm that takes the second parameter as object with
// structure { title, genre, director, year, duration }. It will add a new film
// with these params to array, dynamically assigning an id to film (should be
// the same as length of films +1) and adding empty comments array to it. Should
// return new updated array of films.

const addFilm = (filmsArr, newFilm) => {
  const requiredFields = [
    'title', 'genre', 'director', 'year', 'duration'
  ]

  const valid = requiredFields.every(reqValue => {
    return Object.keys(newFilm).includes(reqValue)
  })
  if (!valid) throw new Error('ololo something went wrong')

  return [
    ...filmsArr,
    { ...newFilm, id: filmsArr.length + 1, comments: [] }
  ]
}

// console.log(addFilm(filmsInJSON, {
//   title: 'Liberal Arts',
//   genre: 'drama',
//   director: 'Josh Radnor',
//   year: 2012,
//   duration: 97
// }))

// Create function addCommentToFilm, second param is a filmId, third is object
// whith authorId, authorName, text and rating (1-5). It adds new comment to
// film. commentId shoud be dynamically assigned (the same as with addFilm
// function). Returns updated array of films.


const addCommentToFilm = (filmsArr, filmId, commentObj) => {
  return filmsArr.map(film => {
    film.id === filmId && (film.comments = [...film.comments, commentObj])

    return film
  })
}

// console.log(addCommentToFilm(filmsInJSON, 2, {
//   authorId: 1001,
//   authorName: 'Hebert',
//   text: 'Lorem ipsim dolor'
// }))
