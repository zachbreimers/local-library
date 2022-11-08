/*
Test data for function validation and review
const accountsFixture = require("../../test/fixtures/accounts.fixture.js")
const authorsFixture = require("../../test/fixtures/authors.fixture.js")
const booksFixture = require("../../test/fixtures/books.fixture.js")
const books = booksFixture.slice()
const accounts = accountsFixture.slice()
const authors = authorsFixture.slice()
const account = accounts[3]
*/

function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1))
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0
  for (let item in books) {
    const book = books[item]
    const borrows = book.borrows
    const IDs = borrows.map((borrow) => borrow.id)
    const filtered = IDs.filter((id) => id === account.id)
    result += filtered.length
  }
  return result
}

function borrowedBooks(books) {
  const filtered = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false))
  return filtered
}

//console.dir(nonReturnedBooks(books, authors), {depth: null})

function getBooksPossessedByAccount(account, books, authors) {
  const outstandingBooks = borrowedBooks(books)
  let booksExtended = []
  let result = []
  for (let i = 0; i < outstandingBooks.length; i++) {
    for (let j = 0; j < authors.length; j++) {
      if (outstandingBooks[i].authorId === authors[j].id) {
        let book = outstandingBooks[i]
        let author = authors[j]
        let bookWithAuthor = { ...book, author }
        booksExtended.push(bookWithAuthor)
      }
    }
  }
  booksExtended.forEach(book => {
    const { borrows } = book
    borrowed = borrows[0]
    if (borrowed.id === account.id) {
      result.push(book)
    }
  })
  return result
}

//console.dir(getBooksPossessedByAccount(account, books, authors), {depth: null})

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
  borrowedBooks,
};
