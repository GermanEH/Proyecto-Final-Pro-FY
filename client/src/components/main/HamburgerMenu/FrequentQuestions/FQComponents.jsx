import { Text, View, FlatList } from "react-native";
import { FQCardSlide } from "./FQCardSlide";

const steps = [
  {
    id: "1",
    title: "step 1",
  },
  {
    id: "2",
    title: "step 2",
  },
  {
    id: "3",
    title: "step 3",
  },
  {
    id: "4",
    title: "step 4",
  },
];

export const AboutUs = () => (
  <Text>
    Somos un grupo de desarrolladores entusiastas que busca mejorar la vida de
    las personas poniendo las tecnologías de la comunicación al servicio de la
    medicina
  </Text>
);

export const WhyUs = () => (
  <Text>
    Pro-Fy es una propuesta única en su tipo, que propone aprovechar al máximo
    la web2.0 para conectar y ampliar el acceso a la salud. Ofrecemos un sistema
    de prueba social para mejorar la confianza en la plataforma
  </Text>
);

export const HowItWorks = () => (
  <View>
    <FlatList
      data={steps}
      renderItem={({ item }) => <FQCardSlide item={item} />}
      horizontal
      showsHorizontalScrollIndicator
      pagingEnabled
      bounces={false}
      keyExtractor={(item) => item.id}
    />
  </View>
);
