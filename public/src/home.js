/*
Test data for function validation and review
const accountsFixture = require("../../test/fixtures/accounts.fixture.js")
const authorsFixture = require("../../test/fixtures/authors.fixture.js")
const booksFixture = require("../../test/fixtures/books.fixture.js")
const books = booksFixture.slice()
const accounts = accountsFixture.slice()
const authors = authorsFixture.slice()
const account = accounts[0]
*/

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const borrowedBooks = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false))
  return borrowedBooks.length
}

function getMostCommonGenres(books) {
  const genres = []
  books.forEach(book => {
    const genreName = genres.find(genre => genre.name === book.genre)
    if (genreName) {
      genreName.count++
    } else {
      const name = book.genre
      genres.push({ name, count:1 })
    }
  })
  let result = genres.sort((genreA, genreB) => (genreA.count < genreB.count ? 1: -1))
  result = result.slice(0,5)
  return result
}

function getMostPopularBooks(books) {
  result = []
  books.forEach(book => {
    const borrows = book.borrows
    const name = book.title
    const count = borrows.length
    result.push({ name, count })
  })
  result.sort((resultA, resultB) => (resultA.count < resultB.count ? 1: -1))
  result = result.slice(0,5)
  return result
}

//console.dir(getMostPopularBooks(books), {depth: null})

function getMostPopularAuthors(books, authors) {
  let bookCount = []
  let results = []
  books.forEach(book => {
    const borrows = book.borrows
    const name = book.authorId
    const count = borrows.length
    bookCount.push({ name, count })
  })
  bookCount.reduce((res,value) => {
    if (!res[value.name]) {
      res[value.name] = { name: value.name, count: 0 }
      results.push(res[value.name])
    }
    res[value.name].count += value.count
    return res
  }, {})
  results.forEach(result => {
    const name = result.name
    authors.forEach(author => {
      const id = author.id
      const { name: {first, last}
    } = author
      const authorName = `${first} ${last}`
      if (name === id) {
        result.name = authorName
      }
    })
  })
  results.sort((resultA, resultB) => (resultA.count < resultB.count ? 1: -1))
  results = results.slice(0,5)
  return results
}

//console.log(getMostPopularAuthors(books, authors))

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
