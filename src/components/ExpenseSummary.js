import React, { Component } from 'react'
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expense-total';
import numeral from 'numeral';

const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense ': 'expenses';
  const formatedExpensesTotal = numeral(expenseTotal / 100).format('$0,0.00');

  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {formatedExpensesTotal}</h1>
    </div>
  )
} 

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses)
  }
}


export default connect(mapStateToProps)(ExpenseSummary)