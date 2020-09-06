import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const Home = React.FC = ({ navigation }) => {

  const sobre = () => (    
      navigation.navigate('Oportunidades')
    )

  return (
    <View style={styles.container}>
      
      <View style={styles.box}>
      <TouchableOpacity style={{
    flex: 1,
    backgroundColor: "#5DCFEE",
    alignItems: "center",
    justifyContent: "center"
  }} onPress={sobre}>
        <View>
          <Text style={styles.title}>OPORTUNIDADES DE INGRESSO</Text>
        </View>
        </TouchableOpacity>
      </View>
     

      <View style={styles.box}>
      <TouchableOpacity style={styles.inner} onPress={sobre}>
        <View>
          <Text style={styles.title}>VAGAS NAS UNIVERSIDADES</Text>
        </View>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
      <TouchableOpacity style={styles.inner} onPress={sobre}>
        <View>
          <Text style={styles.title}>COMO VOCÊ ESTÁ?</Text>
        </View>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
      <TouchableOpacity style={{
    flex: 1,
    backgroundColor: "#5DCFEE",
    alignItems: "center",
    justifyContent: "center"
  }} onPress={sobre}>
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
  inner:{
    flex: 1,
    backgroundColor: "#CEE9F3",
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
