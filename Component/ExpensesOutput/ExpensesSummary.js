import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../Constants/styles";

function ExpensesSummary({ expenses, periodName }) {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
    </View>
  );
}
export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
    fontSize: 16,
  },
});