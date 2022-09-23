import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../Constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({ expenses, expensePeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensePeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}
export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
