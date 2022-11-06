const accountsFixture = require("../../test/fixtures/accounts.fixture.js")
const authorsFixture = require("../../test/fixtures/authors.fixture.js")
const booksFixture = require("../../test/fixtures/books.fixture.js")
const books = booksFixture.slice()
const accounts = accountsFixture.slice()
const authors = authorsFixture.slice()
const account = accounts[0]

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

console.log(getMostCommonGenres(books))

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
