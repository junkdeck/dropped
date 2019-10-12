import {createSelector} from 'reselect'

const getEmployeeList = state => state.data.employees
const getAccountsList = state => state.data.accounts

export const getFormattedEmployeeList = createSelector(
  getEmployeeList,
  getAccountsList,
  (employees, accounts) =>
    employees.map(x => {
      const account = accounts.find(
        account => account.id === x.relationships.account.data.id,
      )
      return {
        name: x.attributes.name,
        email: account?.attributes.email || null,
        initials: x.attributes.firstName[0] + x.attributes.lastName[0]
      }
    }),
)
