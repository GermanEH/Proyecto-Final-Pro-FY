import { View, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { getMenuLinks } from "./menuLinks";
import Icon from 'react-native-vector-icons/FontAwesome'

export function MenuComponent(props) {
  const menuLinks = getMenuLinks(props.route.params.usertype)
  return (
    <View style={{ flex: 1, paddingHorizontal: 30, position: 'relative'  }}>
      <DrawerContentScrollView>
        <TouchableOpacity style={{ alignItems: 'flex-end', paddingVertical: 10 }}
        onPress={() => props.navigation.closeDrawer()}
        >
          <Icon name="close" size={30} color="black" />
        </TouchableOpacity>
        {
          menuLinks.map((link, index) => {
            return (
              <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}
                onPress={
                  () => props.navigation.navigate(link.screen)
                }
              >
                <View style={{ height: 30, width: 30, marginRight: 20, alignItems: 'center' }}>
                  <Icon name={link.icon} size={25} />
                </View>
                <Text>
                  {link.label}
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </DrawerContentScrollView>
      <View style={{ position: 'absolute', bottom: 40, left: 30 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}
          onPress={
            () => props.navigation.navigate('SignOut')
          }>
          <View style={{ height: 30, width: 30, marginRight: 20, alignItems: 'center' }}>
            <Icon name='power-off' size={25} />
          </View>
          <Text>
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}