import React, { useState, useEffect } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import theme from "../../theme";

export function LoadingImage({ setValue }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    setValue("image", image);
  }, [image]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.uri);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ justifyContent: "center" }}>
        <TouchableOpacity style={styles.btn} onPress={pickImage}>
          <Text style={{ fontSize: 10, color: theme.colors.secondaryText }}>
            Selecciona una Imagen de Perfil
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: 100, height: 100, borderRadius: 10 }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 15,
    backgroundColor: theme.colors.primaryColor,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
