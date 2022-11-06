const accountsFixture = require("../../test/fixtures/accounts.fixture.js")
const authorsFixture = require("../../test/fixtures/authors.fixture.js")
const booksFixture = require("../../test/fixtures/books.fixture.js")
const books = booksFixture.slice()
const accounts = accountsFixture.slice()
const authors = authorsFixture.slice()
const account = accounts[0]

function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return books.find(book => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false))
  const returnedBooks = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true))
  const result = [[ ...borrowedBooks ],[ ...returnedBooks ]]
  return result
}

console.dir(partitionBooksByBorrowedStatus(books), {depth:null})

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
