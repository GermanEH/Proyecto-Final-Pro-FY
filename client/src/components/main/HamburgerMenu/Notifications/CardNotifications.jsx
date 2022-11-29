import { View, Text, StyleSheet } from "react-native";
import theme from "../../../../theme";

export function CardNotifications({ notification, detail }) {
  return (
    <View style={styles.card}>
      <Text style={styles.notification}> {notification} </Text>
      <Text style={styles.detail}> {detail} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    padding: 20,
    margin: 7,
    height: 200,
    width: 350,
    backgroundColor: "white",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 50,
  },
  notification: {
    fontSize: theme.fontSize.primaryText,
    fontWeight: theme.fontWeights.bold,
  },
  detail: {
    fontSize: theme.fontSize.primaryText,
    fontWeight: theme.fontWeights.normal,
  }
});
