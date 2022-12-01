import { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getProfessionals } from "../../slices/professionalsActions";
import theme from "../../theme";
import { ButtonDating, ButtonGreen, ButtonRed } from "../shared/Button";
import { getAuth } from "firebase/auth";
export function QueryDetailProf() {
  const professionals = useSelector(
    (state) => state.professionals.professionals
  );
  const [professional, setProfessional] = useState(null);
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = auth.currentUser;
  const [render, setRender] = useState(false);
  useEffect(() => {
    if (render) setRender(false);
  }, [render]);
  useEffect(() => {
    dispatch(getProfessionals());
  }, []);

  useEffect(() => {
    if (professionals.length) {
      const prof = professionals.find((p) => p.email === user.email);
      console.log("profffffff", prof);
      if (prof) {
        setProfessional(prof);
      }
    }
  }, [professionals]);

  return (
    <View>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}>
        <View>
          <View style={styles.container}>
            <View style={{ padding: 10 }}>
              <Text>Mi Nombre</Text>
              <Text>Fecha de Creación</Text>
            </View>
            <View style={{ padding: 10 }}>
              <Text>Tipo de Consulta</Text>
              <Text>Profesional</Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Text>Estado:</Text>
              <Text style={{ color: "red", padding: 10 }}>Cancelado</Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Text>Estado:</Text>
              <Text style={{ color: "blue", padding: 10 }}>Resuelta</Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Text>Estado:</Text>
              <Text style={{ color: "#f0c325", padding: 10 }}>Pendiente</Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Text>Estado:</Text>
              <Text style={{ color: "green", padding: 10 }}>Confirmado</Text>
            </View>
            <View style={styles.containerObservations}>
              <View style={styles.observations}>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <Text>Observasiones</Text>
                <View
                  style={{
                    flexDirection: "column",
                    paddingTop: 30,
                  }}
                >
                  <TextInput
                    style={styles.input}
                    placeholder="Comentarios..."
                  />
                  <TouchableOpacity style={styles.btnObservation}>
                    <Text
                      style={{
                        color: theme.colors.secondaryText,
                        textAlign: "center",
                        fontSize: 12,
                      }}
                    >
                      Observaciones
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {professional && professional.plan === "noSuscription" ? (
            <View></View>
          ) : (
            <View>
              <ButtonDating
                backgroundColor={"red"}
                text={"Cancelar consulta"}
                color={theme.colors.secondaryText}
              />
              <ButtonDating
                backgroundColor={"green"}
                text={"Confirmar consulta"}
                color={theme.colors.secondaryText}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  containerObservations: {},
  observations: {
    paddingVertical: 50,
    paddingHorizontal: 90,
    marginHorizontal: 20,
    backgroundColor: theme.colors.secondaryText,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    borderRadius: theme.borderRadius.borderRadiusBotton,
    marginVertical: 20,
  },
  containerBtn: {
    width: 300,
    alignSelf: "flex-end",
    paddingHorizontal: 50,
  },
  btn: {
    backgroundColor: theme.colors.secondaryColor,
    paddingVertical: 20,
    borderRadius: theme.borderRadius.borderRadiusBotton,
    alignSelf: "flex-end",
    padding: 20,
    marginBottom: 20,
    marginRight: 20,
  },
  btnObservation: {
    backgroundColor: theme.colors.primaryColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: theme.borderRadius.borderRadiusBotton,
  },
  input: {
    marginBottom: 20,
    paddingHorizontal: 35,
    paddingVertical: 10,
  },
});
