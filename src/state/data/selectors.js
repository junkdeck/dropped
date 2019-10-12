import {createSelector} from 'reselect'

const getEmployeeList = state => state.data.employees
const getAccountsList = state => state.data.accounts

export const getFormattedEmployeeList = createSelector(
  getEmployeeList,
  getAccountsList,
  (employees, accounts) =>
    employees.map(x => {
      const account = accounts.find(account => account.id === x.id)
      return {
        name: x.attributes.name,
        email: account?.attributes.email || null,
      }
    }),
)
