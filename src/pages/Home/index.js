import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Home = React.FC = ({ navigation }) => {

  const oportunidades = () => (
    navigation.navigate('Oportunidades')
  )

  const vagas = () => (
    navigation.navigate('Vagas')
  )

  const como_voce_esta = () => (
    navigation.navigate('ComoVoceEsta')
  )

  const dicas = () => (
    navigation.navigate('Dicas')
  )


  return (
    <View style={styles.container}>

      <View style={styles.box}>
        <TouchableOpacity style={{
          flex: 1,
          backgroundColor: "#41AAC2",
          alignItems: "center",
          justifyContent: "center"
        }} onPress={oportunidades}>
          <View>
            <Text style={styles.title}>OPORTUNIDADES DE INGRESSO</Text>
          </View>
        </TouchableOpacity>
      </View>


      <View style={styles.box}>
        <TouchableOpacity style={styles.inner} onPress={vagas}>
          <View>
            <Text style={styles.title}>VAGAS NAS UNIVERSIDADES</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity style={styles.inner} onPress={como_voce_esta}>
          <View>
            <Text style={styles.title}>COMO VOCÊ ESTÁ?</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity style={{
          flex: 1,
          backgroundColor: "#41AAC2",
          alignItems: "center",
          justifyContent: "center"
        }} onPress={dicas}>
          <View>
            <Text style={styles.title}>DICAS DO UNIAQUI</Text>
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
    flexDirection: "row",
    flexWrap: "wrap"
  },
  box: {
    width: "50%",
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
    fontSize: 18,
    color: 'white',
    textAlign: "center"
  }
});

export default Home;
