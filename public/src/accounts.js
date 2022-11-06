const accountsFixture = require("../../test/fixtures/accounts.fixture.js")
const booksFixture = require("../../test/fixtures/books.fixture.js")
const books = booksFixture.slice()
const accounts = accountsFixture.slice()
const account = accounts[0]

function findAccountById(accounts, id) {
  for (let account in accounts) {
    const person = accounts[account]
    const personID = person.id
    if (personID === id) {
      return person
    }
  }
  return null
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

console.log(getTotalNumberOfBorrows(account, books))

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
