import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import theme from "../../theme";
import { SelectList } from "react-native-dropdown-select-list";
import { ButtonDating, ButtonGenerateQuery } from "../shared/Button";

export function GenerateQuery({ navigation }) {
  const [text, onChangeText] = useState("");
  const [modalitie, setModalitie] = useState("");
  const [payment, setPayment] = useState("");
  const [render, setRender] = useState(false);

  const dispatch = useDispatch();
  const queries = useSelector((state) => state.queries.queries);
  const modalities = useSelector((state) => state.queries.modalities);
  const payments = useSelector((state) => state.queries.payments);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ width: "100%", paddingVertical: 30 }}>
          <Text style={styles.text}>¿Que tipo de consulta desea?</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={onChangeText}
            style={styles.textInput}
            placeholder="Describa su problema"
            value={text}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text style={styles.text}>Modalidad de consulta:</Text>
          {modalities.length > 0 ? (
            <SelectList
              boxStyles={{ backgroundColor: "#A8A7A3" }}
              setSelected={(val) => setModalitie(val)}
              data={modalities}
              save="value"
              inputStyles={{ fontSize: 12 }}
            />
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
        <View style={{ paddingVertical: 15 }}>
          <Text style={styles.text}>Modo de pago:</Text>
          {payments.length > 0 ? (
            <SelectList
              boxStyles={{ backgroundColor: "#A8A7A3" }}
              setSelected={(val) => setPayment(val)}
              data={payments}
              save="value"
              onSelect={() => alert(payment)}
              label="Categories"
              inputStyles={{ fontSize: 12 }}
            />
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
        <View style={{ justifyContent: "center", padding: 70 }}>
          <ButtonDating
            text={"Generar consulta"}
            color={theme.colors.secondaryText}
            backgroundColor={theme.colors.primaryColor}
          />
        </View>
        <ButtonGenerateQuery
          navigation={navigation}
          text={"Elegir Profesional"}
          color={theme.colors.secondaryText}
          backgroundColor={theme.colors.primaryColor}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "#A8A7A3",
    borderRadius: 10,
    margin: 25,
  },
});
