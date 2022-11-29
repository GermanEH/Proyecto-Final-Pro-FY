import { View, Text, StyleSheet, ScrollView } from "react-native";
import { CardNotifications } from "./CardNotifications";

const notifications = [
  {
    notification: 'N1N1N1N1N1N1N1N1N1N1N1',
    detail: 'jsahjdjigsdfhcjsdbcgchbskjcbs'
  },
  {
    notification: 'N2N2N2N2N2N2N2N2N2N2N2',
    detail: 'jsahjdjigsdfhcjsdbcgchbskjcbs'
  },
  {
    notification: 'N3N3N3N3N3N3N3NN3',
    detail: 'jsahjdjigsdfhcjsdbcgchbskjcbs'
  },
  {
    notification: 'N4N4N4',
    detail: 'jsahjdjigsdfhcjsdbcgchbskjcbs'
  },
  {
    notification: 'N5N5N5N5',
    detail: 'jsahjdjigsdfhcjsdbcgchbskjcbs'
  },
  {
    notification: 'N6N6N6N6N6',
    detail: 'jsahjdjigsdfhcjsdbcgchbskjcbs'
  },
  {
    notification: 'N1N1N1N1N1N1N1N1N1N1N1',
    detail: 'jsahjdjigsdfhcjsdbcgchbskjcbs'
  },
  {
    notification: 'N1N1N1N1N1N1N1N1N1N1N1',
    detail: 'jsahjdjigsdfhcjsdbcgchbskjcbs'
  },
]


export function Notifications() {
  // const showToast = () => {
  //   Toast.show({
  //     type: 'success',
  //     text1: 'cargando',
  //     text2: 'This is some something 👋',
  //   });
  // }
console.log('hola');
 
  return (
    <ScrollView>
      <View style={styles.container}>
        {
          notifications.map((notification, index) => {
            return <CardNotifications 
            notification={notification.notification}
            detail={notification.detail}
            key={index}
            />
          })
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
});
