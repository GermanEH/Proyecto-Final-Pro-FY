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
import {
  postQuery,
  
} from "../../slices/queriesActions";

export function GenerateQuery({ navigation , route }) {

  const dispatch = useDispatch();

  const queries = useSelector((state) => state.queries.queries);
  const modalities = useSelector((state) => state.queries.modalities);
  const payments = useSelector((state) => state.queries.payments);
  const horarioUno=["08:00","09:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00","18:00"], 
  horarioDos=["10:00","11:00",'12:00',"13:00","14:00","16:00",'17:00',"18:00","19:00",'20:00'], 
  horarioTres=["12:00","13:00","14:00","15:00","16:00","17:00","19:00","20:00","21:00","22:00"];
  const [isDisplayDate, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState("");
  const fechaActual = new Date();
 // const [isDisplayTime, setDisplayTime] = useState(false);
  const [time, setTime] = useState("");
  const [textTime, setTextTime] = useState("");
  //const [Horarios, setHorarios] = useState("");
  let horarios=[];
  let fechaInicial=new Date(), fechaFinal=new Date();
  const professionals = useSelector(
    (state) => state.professionals.professionals
  );
  
    useEffect(() => {
    dispatch(getProfessionals());
  }, []);

  //let names = professionals.map((o) => o.first_name + " " + o.last_name );
  //console.log(professionals)
  
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
      users:"",
      motive: "",
      ModalidadConsulta: "",
      createdDate: fechaActual,
      Pago: "",
      queryDate: fechaActual,
      professionals:"",
      queryHour:"",
      state:"",
    },
  });
  
  const {nombre,scheduleDays,scheduleHours,id}= route.params;

  if(id)
   setValue("id", id)
if(scheduleHours){
  let horActual=fechaActual.getHours();
  console.log(horActual)
 if(scheduleHours==="08:00 - 18:00")
      horarios=(horarioUno)
    if(scheduleHours==="10:00 - 20:00")
      horarios=(horarioDos)
    if(scheduleHours==="12:00 - 22:00")
       horarios=(horarioTres)

}
   

    if(scheduleDays){

     let diaSemana=fechaActual.getDay()
     let limiteInferior,limiteSuperior,sumaDias;
       
      if(scheduleDays==="Lunes - Viernes")
      {
        limiteInferior=1;
        limiteSuperior=5;

      }
      if(scheduleDays==="Martes - Sabado")
      {
        limiteInferior=2;
        limiteSuperior=6;
      }
      if(scheduleDays==="jueves- lunes")
      {
        limiteInferior=3;
        limiteSuperior=7;
      }
      
      if(diaSemana>limiteSuperior || diaSemana<limiteInferior){
          
          // if(limiteInferior===4)
          // {

          //      let fechaPrueb= fechaActual.getDate()+(5)
          //       fechaFinal.setDate(fechaPrueb)

          // }
          // else{
            Alert.alert("Este Profesional no esta Disponible esta Semana")
            navigation.navigate("ProfessionalsList", {name: "ProfessionalsList",})
         // }

      }
      else{
        let fechaPrueb= fechaActual.getDate()+(limiteSuperior-diaSemana)
        fechaFinal.setDate(fechaPrueb)
        
      }


       
    }
   
    
   

  if(nombre)
  setValue("professionals", nombre)

   const onSubmit = (data) => {
    
    console.log(data);
    

   if(data.motive==="" || data.ModalidadConsulta==="" || data.queryDate==="" || data.queryHour===""|| data.state==="" || data.professionals==="" )
      {

       Alert.alert("Hay Campos sin llenar")
        return;
       
     }

  
   if(data.Pago==="Tarjeta de crédito")
   {   navigation.navigate('PagosUserPremium')
     setValue("state", 'resolved')}


  
    // dispatch(postQuery(data));   pasar consulta al back
    
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
   
    setDate(selectedDate);
    setShow(false);
    //setDisplayTime(true);
    let tempDate= new Date(currentDate);
    let fDate= tempDate.getDate()+ '/'+(tempDate.getMonth()+1)+'/'+tempDate.getFullYear();
    setText(fDate)
    setValue("queryDate", fDate);
};

// const changeSelectedTime = (event, selectedDate) => {
   
//    const currentDate=selectedDate||time;
//     setValue("Hora", selectedDate);
//     setTime(selectedDate);
//     setDisplayTime(false);
//     let tempDate= new Date(currentDate);
//     let hora=tempDate.getHours();
//     let minutos=tempDate.getMinutes();
//     if(minutos===0)
//      minutos= "0"+ minutos;
    
 

//     let fTime=  hora +':'+ minutos
    
//     setTextTime(fTime)
    
// };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}>
      <View style={styles.container}>
        <Text style={styles.text}>¿Que tipo de consulta desea?</Text>

        <Controller
          control={control}
          name={"motive"}
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
          {/* <Text style={styles.text}>Modalidad de consulta:</Text> */}

          {modalities.length > 0 ? (
            <SelectList 
              
              boxStyles={{ backgroundColor: "#A8A7A3" }}
              setSelected={(val) => setValue("ModalidadConsulta", val)}
              data={modalities}
              save="value"
              inputStyles={{ fontSize: 12 }}
              placeholder="Modalidad de consulta"
            />
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
     
              
        <View style={{ paddingVertical: 15 }}>

          {/* <Text style={styles.text}>Modo de pago:</Text> */}

          {payments.length > 0 ? (
            <SelectList
              
              name=""
              boxStyles={{ backgroundColor: "#A8A7A3" }}
              data={payments}
              save="value"
              setSelected={(val) => setValue("Pago", val)}
              label="Categories"
              inputStyles={{ fontSize: 12 }}
              placeholder="Modo de pago :"
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
              navigation.navigate("ProfessionalsList", {parent: "GenerateQuery"})}
            title="Elegir profesional"
          />
          <Text style={styles.text}> {nombre} </Text>
        </View>
      <SelectList
            boxStyles={{ backgroundColor: "#A8A7A3" }}
            inputStyles={{ fontSize: 12 }}
            setSelected={(val) => setValue("Professional", val)}
            data={names}
            save="value"
          /> 
    {scheduleDays &&(      
      <View>
      <View style={styles.boton}>

        <Button style={styles.boton} onPress={displayDatepicker} title="Seleccionar fecha" />
      </View>
      
                  <SelectList
                    data={horarios}
                    placeholder="Horario"
                    setSelected={(value)=>{setTime(value)
                      setValue("queryHour", value)
                      }}
                  />
                  <View style={styles.lista}>
                        <Text style={styles.text} >   {text} -- {time} </Text >
                      
                  </View>
            </View>
            )}


                {isDisplayDate && (
                  <View>
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode={"date"}
                      is24Hour={true}
                      display="calendar"
                      showTimeSelect
                      onChange={changeSelectedDate}
                      maximumDate={fechaFinal}
                      minimumDate={fechaInicial}
                      />

                
        </View>
        )}


                  {/* {isDisplayTime && (
                    <DateTimePicker
                      value={time}
                      mode="time"
                      is24Hour={true}
                      display="clock"
                      onChange={changeSelectedTime}
                      minuteInterval={15}
                    />
                )} */}
       
        
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
  },
  text:{

    alignItems:"center",
    padding:5
  }
});
