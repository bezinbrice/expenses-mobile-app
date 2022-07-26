import { useContext } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

const AllExpense = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput 
    expenses={expensesCtx.expenses} 
    expensesPeriod="Total"
    fallBackText="No registered expenses found." />
  );
};

export default AllExpense;