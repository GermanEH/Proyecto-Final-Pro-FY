import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView, View, StyleSheet, ScrollView, Text } from "react-native";
import { CardProfessional } from "./CardProfessional";
import { SelectList } from "react-native-dropdown-select-list";
import {
  getProfessionals,
  getSpecialties,
} from "../../slices/professionalsActions";

import { setFiltered, filterProfessionals } from "../../slices/professionals";
import { addFilter, filtersSelectors } from "../../slices/filters";

export function ProfessionalsList({ navigation, route }) {
  const [speciality, setSpeciality] = useState("");
  const [country, setCountry] = useState("");
  const [render, setRender] = useState(false);

  const filters = useSelector(filtersSelectors.selectEntities);
  const filtersIds = useSelector(filtersSelectors.selectIds);
  const professionals = useSelector((state) => state.professionals.professionals);
  const filtered = useSelector((state) => state.professionals.filtered);
  const specialties = useSelector((state) => state.professionals.specialties);
  const countries = useSelector((state) => state.professionals.countries);
  const specialtiesNames = useSelector((state) => state.professionals.specialtiesNames);

  const dispatch = useDispatch();
  let s = {};

  useEffect(() => {
    dispatch(getProfessionals());
  }, []);
  useEffect(() => {
    dispatch(getSpecialties());
  }, []);
  useEffect(() => {
    professionals?.length ? (
      dispatch(setFiltered(professionals))
    ) : (
      <text>Loading...</text>
    );
  }, [professionals]);
  useEffect(() => {
    if (render === true) setRender(false);
  }, [render]);

  useEffect(() => {
    if (speciality.length > 0) {
      let specialty = specialties.filter((s) => s.name === speciality)[0];
      dispatch(addFilter({ id: 1, speciality: specialty.name }));
    }
    setRender(true);
  }, [speciality]);
  useEffect(() => {
    if (country.length > 0) {
      dispatch(addFilter({ id: 2, country: country }));
    }
    setRender(true);
  }, [country]);

  useEffect(() => {
    if (filtersIds.length > 0) {
      let arr = [];
      if (filters[1]) arr.push({ specialities: filters[1]["speciality"] });
      if (filters[2]) arr.push({ country: filters[2]["country"] });
      dispatch(filterProfessionals(arr));
    }
  }, [filters]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {specialtiesNames.length > 0 ? (
            <SelectList
              setSelected={(val) => setSpeciality(val)}
              data={specialtiesNames}
              save="value"
            />
          ) : (
            <Text>Loading...</Text>
          )}
          <SelectList
            setSelected={(val) => {setCountry(val)}}
            data={countries}
            save="value"
            // onSelect={() => alert(selected)}
            // label="Categories"
          />
          {(filtered.length > 0 && specialties.length > 0) ? (
            filtered.map((p, index) => {
              return (
                <CardProfessional
                  id={p.id}
                  first_name={p.first_name}
                  last_name={p.last_name}
                  country={p.country}
                  specialty={p.specialities}
                  scheduleDays={p.scheduleDays}
                  scheduleHours={p.scheduleHours}
                  key={index}
                  parent={route.params.parent}
                  navigation={navigation}
                />
              );
            })
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
});
