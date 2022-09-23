import { useContext } from "react";
import ExpensesOutput from "../Component/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput expenses={expensesCtx.expenses} expensePeriod="total" />
  );
}

export default AllExpenses;
