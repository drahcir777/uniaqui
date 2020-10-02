import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import Equilibrio from '../../assets/EQULIBRIO.png'
import Saude from '../../assets/SAUDE.png'


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
    backgroundColor: "#EFB6D4",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  }} onPress={cuide_da_ansiedade}>
        <View>
          <Text style={styles.title}>Cuide da ansiedade</Text>
        </View>

        <View>
              <Image 
                style={styles.icones}
                source={Saude}
              />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
      <TouchableOpacity style={styles.inner} onPress={mantenha_o_equilibrio}>
        <View>
          <Text style={styles.title}>Mantenha o equilíbrio</Text>
        </View>

        <View>
              <Image 
                style={styles.icones}
                source={Equilibrio}
              />
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
     flexWrap: "wrap"
  },
  box: {
    width: "100%",
    height: "50%",
    padding: 15,
    
  },
  inner:{
    flex: 1,
    backgroundColor: "#F3DC7C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    textAlign: "center",
    maxWidth: "90%"
  },
  icones: {
    marginTop: 20
  }
});

export default ComoVoceEsta;
