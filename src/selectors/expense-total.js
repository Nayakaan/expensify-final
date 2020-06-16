export default (expenses) => {
  if(expenses.length) {
    return expenses
      .map(expense => expense.amount)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  } else {
    return 0;
  }
}

