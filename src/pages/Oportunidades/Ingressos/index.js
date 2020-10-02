import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Ingresso = React.FC = ({ navigation }) => {

  const sisu = () => (
    navigation.navigate('Sisu')
  )

  const prouni = () => (
    navigation.navigate('Prouni')
  )

  const pfies = () => (
    navigation.navigate('Pfies')
  )

  const fies = () => (
    navigation.navigate('Fies')
  )

  return (
    <View style={styles.container}>

      <View style={styles.box}>
        <TouchableOpacity style={{
          flex: 1,
          backgroundColor: "#C09ECA",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50
        }} onPress={sisu}>
          <View>
            <Text style={styles.title}>SISU</Text>
          </View>
        </TouchableOpacity>
      </View>


      <View style={styles.box}>
        <TouchableOpacity style={{
          flex: 1,
          backgroundColor: "#EFB6D4",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50
        }} onPress={prouni}>
          <View>
            <Text style={styles.title}>Prouni</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity style={{
          flex: 1,
          backgroundColor: "#EDAABC",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50
        }} onPress={fies}>
          <View>
            <Text style={styles.title}>FIES</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity style={{
          flex: 1,
          backgroundColor: "#F3DC7C",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50
        }} onPress={pfies}>
          <View>
            <Text style={styles.title}>P-FIES</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BEE0E3",
    width: "100%",
    height: "100%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  box: {
    width: "50%",
    height: "50%",
    padding: 13,

  },
  inner: {
    flex: 1,
    backgroundColor: "#EFB6D4",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    textAlign: "center"
  }
});

export default Ingresso;
