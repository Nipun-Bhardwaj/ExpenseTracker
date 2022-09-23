import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../Constants/styles";

function Input({ label, inValid, textInputConfig, style }) {
  const inputStyle = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }

  if (inValid) {
    inputStyle.push(styles.invalidInputs);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, inValid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInputs: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
