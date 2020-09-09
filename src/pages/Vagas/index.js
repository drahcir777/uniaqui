import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Vagas = React.FC = ({ navigation }) => {

  const uni = () => (
    navigation.navigate('UniParticulares')
  )

  const uniPublicas = () => (
    navigation.navigate('UniPublicas')
  )

  return (
    <View style={styles.container}>

      <View style={styles.box}>
        <TouchableOpacity style={{
          flex: 1,
          backgroundColor: "#41AAC2",
          alignItems: "center",
          justifyContent: "center"
        }} onPress={uni}>
          <View>
            <Text style={styles.title}>FACULDADE/UNIVERSIDADES PARTICULARES</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity style={styles.inner} onPress={uniPublicas}>
          <View>
            <Text style={styles.title}>UNIVERSIDADES PÚBLICAS</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    padding: 5,
    flexWrap: "wrap"
  },
  box: {
    width: "100%",
    height: "50%",
    padding: 0,

  },
  inner: {
    flex: 1,
    backgroundColor: "#6EC7DE",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    textAlign: "center"
  }
});

export default Vagas;
