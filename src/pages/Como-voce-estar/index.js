import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const ComoVoceEsta = React.FC = ({ navigation }) => {

  const cuide_da_ansiedade = () => (    
      navigation.navigate('CuideDaAnsiedade')
    )

    const mantenha_o_equilibrio = () => (    
        navigation.navigate('MantenhaOEquilibrio')
      )

  return (
    <View style={styles.container}>
      
      <View style={styles.box}>
      <TouchableOpacity style={{
    flex: 1,
    backgroundColor: "#41AAC2",
    alignItems: "center",
    justifyContent: "center"
  }} onPress={cuide_da_ansiedade}>
        <View>
          <Text style={styles.title}>Cuide da ansiedade</Text>
        </View>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
      <TouchableOpacity style={styles.inner} onPress={mantenha_o_equilibrio}>
        <View>
          <Text style={styles.title}>Mantenha o equilíbrio</Text>
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
    textAlign: "center",
    maxWidth: "90%"
  }
});

export default ComoVoceEsta;
