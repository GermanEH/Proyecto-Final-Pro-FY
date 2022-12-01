import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import theme from "../../theme";
import { FontAwesome } from "@expo/vector-icons";
import { ButtonDating, ButtonQueries } from "../shared/Button";
import { useDispatch } from 'react-redux'
import { handleFavourite } from "../../slices/professionals";

export function CardProfessional(
  // {
  // id,
  // image,
  // first_name,
  // last_name,
  // country,
  // scheduleDays,
  // scheduleHours,
  // specialty,
  // navigation,
  // parent
// }
{navigation,
parent,
professional}
) 
    {
      console.log(professional)
      // const dispatch = useDispatch();
      // const handlePress = (parent === "HomePacient") ? ["HomePacient", { professional: professional}] : ["GenerateQuery", { id: id, nombre: professional.first_name+ "  " + professional.last_name , scheduleHours: professional.scheduleHours, scheduleDays: professional.scheduleDays }]
      const dispatch = useDispatch();
      const handlePress = () => {
        if (parent === "HomePacient") {dispatch(handleFavourite(professional)); navigation.navigate("HomePacient")}}
        if (parent === "GenerayeQuery") {() => {      
          navigation.navigate("GenerateQuery", { 
            id: professional.id, nombre: professional.first_name + "  " + professional.last_name, 
            scheduleHours: professional.scheduleHours, 
            scheduleDays: professional.scheduleDays  })
          }}
        
  return (
    <SafeAreaView>
      {/* <TouchableOpacity onPress={handlePress(parent)}> */}
      {/* <TouchableOpacity onPress={() => navigation.navigate(handlePress[0], handlePress[1])}> */}
      <TouchableOpacity onPress={() => handlePress()}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.image}
              source={{uri:professional?.image}}
            />
          </View>
          <View style={styles.description}>
            <Text style={styles.name}>
              {professional?.first_name} {professional?.last_name}
            </Text>
            <Text style={styles.speciality}>{professional?.specialty}</Text>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={styles.location}>{professional?.country}</Text>
                {/* <Text style={styles.phone}>{phone} */}
                {/* </Text> */}
                <View style={styles.star}>
                  <FontAwesome
                    style={{ paddingLeft: 5 }}
                    name="star-o"
                    size={15}
                    color="black"
                  />
                  <FontAwesome
                    style={{ paddingLeft: 5 }}
                    name="star-o"
                    size={15}
                    color="black"
                  />
                  <FontAwesome
                    style={{ paddingLeft: 5 }}
                    name="star-o"
                    size={15}
                    color="black"
                  />
                  <FontAwesome
                    style={{ paddingLeft: 5 }}
                    name="star-o"
                    size={15}
                    color="black"
                  />
                  <FontAwesome
                    style={{ paddingLeft: 5 }}
                    name="star-o"
                    size={15}
                    color="black"
                  />
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ProfessionalDetail", {
                    id: professional.id,
                  });
                }}
                style={styles.btn}
              >
                <Text style={{ color: theme.colors.secondaryText }}>
                  Ver más {">"}
                </Text>
              </TouchableOpacity>
            
            {/* <ButtonDating
                color={theme.colors.secondaryText}
                text={"Select"}
                backgroundColor={theme.colors.primaryColor}
              /> */}
            </View>
          </View>
        </View>
        <View style={{ marginLeft: 10, justifyContent: "center" }}>
        </View>
      </View>
     </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    margin: 5,
    width: 320,
    height: 130,
    backgroundColor: "white",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: .1,
    shadowRadius: 9.11,
    elevation: 14,
  },
  image: {
    height: 120,
    width: 100,
    marginLeft: 5,
    marginTop: 5,
  },
  description: {
    marginTop: 5,
    width: 200,
    height: 100,
  },
  name: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSize.primaryText,
  },
  speciality: {
    fontWeight: theme.fontWeights.normal,
    fontSize: theme.fontSize.secondaryText,
  },
  location: {
    fontWeight: theme.fontWeights.light,
    fontSize: theme.fontSize.secondaryText,
  },
  phone: {
    fontWeight: theme.fontWeights.light,
    fontSize: theme.fontSize.secondaryText,
  },
  star: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 5,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.primaryColor,
    margin: 20,
    borderRadius: theme.borderRadius.borderRadiusBotton,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
});
