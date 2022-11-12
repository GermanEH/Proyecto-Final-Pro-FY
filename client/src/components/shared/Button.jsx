import { Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../theme";

export function ButtonRed(props) {
  return (
    <TouchableOpacity style={{ ...styles.btn, backgroundColor: "red" }}>
      <Text style={{ color: `${props.color}` }}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export function ButtonGreen(props) {
  return (
    <TouchableOpacity style={{ ...styles.btn, backgroundColor: "green" }}>
      <Text style={{ color: `${props.color}` }}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 20,
    borderRadius: theme.borderRadius.borderRadiusBotton,
    alignSelf: "flex-end",
    padding: 20,
    marginBottom: 20,
    marginRight: 20,
  },
});
