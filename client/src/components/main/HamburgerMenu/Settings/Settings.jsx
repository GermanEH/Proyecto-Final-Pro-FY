import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { CardSettings } from "./CardSetting";
import { dataSetting } from "./dataSetting";


export function Settings() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {
          dataSetting.map((datSetting, index) => (
            <CardSettings
              key={index}
              index={index}
              {...datSetting}
            />
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
