import {createSelector} from 'reselect'

import {getSearchInputValue} from 'src/state/input/selectors'

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
        id: x.id,
        initials: x.attributes.firstName[0] + x.attributes.lastName[0],
      }
    }),
)

export const getFilteredEmployeeList = createSelector(
  getSearchInputValue,
  getFormattedEmployeeList,
  (value, list) =>
    list.filter(x => {
      const name = x.name
        .split(' ')
        .join('')
        .toUpperCase()

      const stripped = value
        .split(' ')
        .join('')
        .toUpperCase()

      return name.includes(stripped)
    }),
)
