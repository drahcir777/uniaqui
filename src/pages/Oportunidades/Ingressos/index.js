import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const Ingresso = React.FC = ({ navigation }) => {

  const oportunidades = () => (    
      navigation.navigate('Oportunidades')
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
          <Text style={styles.title}>SISU</Text>
        </View>
        </TouchableOpacity>
      </View>
     

      <View style={styles.box}>
      <TouchableOpacity style={styles.inner} onPress={oportunidades}>
        <View>
          <Text style={styles.title}>Prouni</Text>
        </View>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
      <TouchableOpacity style={styles.inner} onPress={oportunidades}>
        <View>
          <Text style={styles.title}>FIES</Text>
        </View>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
      <TouchableOpacity style={{
    flex: 1,
    backgroundColor: "#41AAC2",
    alignItems: "center",
    justifyContent: "center"
  }} onPress={oportunidades}>
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

export default Ingresso;
