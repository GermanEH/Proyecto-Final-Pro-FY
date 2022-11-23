import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
  SafeAreaView ,
  Alert,
  
} from "react-native";
import React, { useState , useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import theme from "../../theme";
import { SelectList } from "react-native-dropdown-select-list";
import { ButtonDating, ButtonGenerateQuery } from "../shared/Button";
import { useForm, Controller } from "react-hook-form";
//import { TouchableOpacity } from "react-native-gesture-handler";
 import DateTimePicker from '@react-native-community/datetimepicker'
 import {
  getProfessionals,
  getSpecialties,
} from "../../slices/professionalsActions";

export function GenerateQuery({ navigation , route }) {
 
  const dispatch = useDispatch();
  const queries = useSelector((state) => state.queries.queries);
  const modalities = useSelector((state) => state.queries.modalities);
  const payments = useSelector((state) => state.queries.payments);

  const [isDisplayDate, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState("");
  const fechaActual = new Date();
  const [isDisplayTime, setDisplayTime] = useState(false);
  const [time, setTime] = useState(new Date());
  const [textTime, setTextTime] = useState("");
 
  const professionals = useSelector(
    (state) => state.professionals.professionals
  );
  
    useEffect(() => {
    dispatch(getProfessionals());
  }, []);

  //let names = professionals.map((o) => o.first_name + " " + o.last_name );
 
  
  const {
    getValues,
    register,
    setValue,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tipoConsulta: "",
      ModalidadConsulta: "",
      Fecha: fechaActual,
      Pago: "",
      Professional:"",
      Hora:"",
    },
  });
  
  const {nombre}= route.params;
  setValue("Professional", nombre)
  //console.log(getValues(["Fecha"])[0]);
  //console.log(nombre);
   const onSubmit = (data) => {
    
    console.log(data);
    

    if(data.tipoConsulta==="" || data.ModalidadConsulta==="" || data.Fecha===""|| data.Pago==="" || data.Professional==="" )
     {

        Alert.alert("Hay Campos sin llenar")
        return;
       
     }
  
   if(data.Pago==="Tarjeta de crédito")
      navigation.navigate('Pagos')
    
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  const displayDatepicker = () => {
   setShow(true);
};
//   const displayTimepicker = () => {
//    setDisplayTime(true);
// };

const changeSelectedDate = (event, selectedDate) => {
   
   const currentDate=selectedDate||date;
   setValue("Fecha", selectedDate);
    setDate(selectedDate);
    setShow(false);
    setDisplayTime(true);
    let tempDate= new Date(currentDate);
    let fDate= tempDate.getDate()+ '/'+tempDate.getMonth()+'/'+tempDate.getFullYear();
    setText(fDate)
    
};

const changeSelectedTime = (event, selectedDate) => {
   
   const currentDate=selectedDate||time;
    setValue("Hora", selectedDate);
    setTime(selectedDate);
    setDisplayTime(false);
    let tempDate= new Date(currentDate);
    let hora=tempDate.getHours();
    let minutos=tempDate.getMinutes();
    if(minutos===0)
     minutos= "0"+ minutos;
    
 

    let fTime=  hora +':'+ minutos
    
    setTextTime(fTime)
    
};

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}>
      <View style={styles.container}>
        <Text style={styles.text}>¿Que tipo de consulta desea?</Text>

        <Controller
          control={control}
          name={"tipoConsulta"}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <>
              <View style={{ width: "100%", paddingVertical: 30 }}>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={onChange}
                  style={styles.textInput}
                  placeholder="Describa su problema"
                  
                  
                />
              </View>
            </>
          )}
        />
           

        <View style={{ paddingVertical: 10 }}>
          <Text style={styles.text}>Modalidad de consulta:</Text>
          {modalities.length > 0 ? (
            <SelectList 
              
              boxStyles={{ backgroundColor: "#A8A7A3" }}
              setSelected={(val) => setValue("ModalidadConsulta", val)}
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
              
              name=""
              ModalidadConsulta
              boxStyles={{ backgroundColor: "#A8A7A3" }}
              data={payments}
              save="value"
              setSelected={(val) => setValue("Pago", val)}
              label="Categories"
              inputStyles={{ fontSize: 12 }}
            />
          ) : (
            <Text>Loading...</Text>
          )}
        </View>

         <View style={{ alignItems: "center" }}>
          {/* <ButtonGenerateQuery
            navigation={navigation}
            text={"Elegir Profesional"}
            color={theme.colors.secondaryText}
            backgroundColor={theme.colors.primaryColor}
          /> */}
       <Button
             onPress={() =>
             navigation.navigate("ProfessionalsList", {name: "ProfessionalsList",})
         }
       title="Elegir Profesional" 
       />
        <Text style={styles.text} > {nombre}  </Text >

        </View> 
      {/* <Text style={styles.text}>Seleccione Professional:</Text>
       <SelectList
           
           boxStyles={{ backgroundColor: "#A8A7A3" }}
           inputStyles={{ fontSize: 12 }}
           setSelected={(val) => setValue("Professional", val)}
           data={names}
           save="value"
          /> */}
           <View style={styles.boton}>

         <Button style={styles.boton} onPress={displayDatepicker} title="Seleccionar fecha" />
        
            </View>
               {isDisplayDate && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={date}
                     mode={"date"}
                     is24Hour={true}
                     display="calendar"
                     showTimeSelect
                     onChange={changeSelectedDate}
                     maximumDate={new Date(2023,2)}
                     minimumDate={new Date()}
                     
                     
            />
         )}
                  {isDisplayTime && (
                    <DateTimePicker
                      value={time}
                      mode="time"
                      is24Hour={true}
                      display="clock"
                      onChange={changeSelectedTime}
                      minuteInterval={15}
                    />
                )}

        <View style={styles.lista}>
              <Text style={styles.text} > {text} - {textTime} </Text >
             
        </View>
        
        <View style={styles.boton}>

          <Button    onPress={handleSubmit(onSubmit)} title="Generar Consulta" />
        
          
        </View>
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
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: theme.colors.primaryColor,
    borderRadius: 10,
    justifyContent: "center",
    padding: 10,
  },
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
  lista:{

    padding:5,
    flexDirection: 'row',
     justifyContent: 'space-between',
  },
  boton:{
    flexDirection: 'row',
     justifyContent: 'space-between',
     padding:20
  }
});
