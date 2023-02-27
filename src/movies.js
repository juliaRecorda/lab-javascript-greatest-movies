// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const directors = movies.map(movie => movie.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const dramaSpielbergMovies = movies.filter (movie => movie.director === "Steven Spielberg" && movie.genre.includes( "drama"))
    return dramaSpielbergMovies.length;
  }
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (movies.length === 0){
      return 0;
    }
    const sum = movies.reduce((accumulator, movie) => {
      return accumulator + movie.score;
    }, 0);
  
    const averageScore = sum / movies.length;
  
    return averageScore;
  }
  
  const averageMoviesScore = scoresAverage(movies)
  
  averageScoreRounded = parseFloat(averageMoviesScore.toFixed(2))
  
  console.log(averageScoreRounded)
  
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter (movie => movie.genre.includes("Drama"))
  if (dramaMovies.length === 0){
    return 0;
  }
  const sum = dramaMovies.reduce((acumulator, movie) => {
    return acumulator + movie.score;
  }, 0);

  const averageScoreDrama = sum / dramaMovies.length;

  return parseFloat(averageScoreDrama.toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const orderedArray = [...movies]
  orderedArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    }
    return a.year - b.year
  })
  return orderedArray;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const alphabeticallyOrderedArray = [...movies].sort((a, b) => a.title.localeCompare(b.title))
  const first20Movies = alphabeticallyOrderedArray.slice(0, 20)
  return alphabeticallyOrderedArray.map ( movies => movies.title.toString())
}

function orderAlphabetically(movies) {
  const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title))
  const top20Movies = sortedMovies.slice(0, 20)
  return top20Movies.map(movie => movie.title.toString())
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
