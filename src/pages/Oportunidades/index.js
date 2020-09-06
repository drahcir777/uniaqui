import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Oportunidades({ navigation }) {

    const oportunidades = () => (    
        navigation.navigate('Oportunidades')
      )
 return (
   <View style={styles.container}>
       <View style={styles.paragrafo}>
            <Text style={styles.text}>
            Para viabilizar o acesso dos brasileiros ao ensino superior alguns programas do governo foram criados para o ingresso ao ensino superior. E o Exame Nacional do Ensino Médio (Enem) é o passaporte para todos eles
            </Text>
            <Text style={{textAlign: "justify",color: "white",  fontSize: 17, fontWeight: "bold", marginTop: 20}}>O que é o Enem?</Text>

            <Text style={styles.text}>
            Criado em 1998, o Exame Nacional do Ensino Médio (Enem) tem o objetivo de avaliar o desempenho do estudante ao fim da escolaridade básica. Podem participar do exame alunos que estão concluindo ou que já concluíram o ensino médio em anos anteriores
            </Text>

           
            <TouchableOpacity style={styles.botao} onPress={oportunidades}>
            <View>
                <Text style={{textAlign: "justify",color: "white",  fontSize: 17, fontWeight: "bold", marginTop: 20, padding: 20}}>Confira algumas oportunidades de ingresso ao Ensino Superior</Text>
            </View>
        </TouchableOpacity>
            
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#5DCFEE",
       width: "100%", 
       height: "100%",
       padding: 5,
       flexDirection: "row",
       flexWrap: "wrap"
    },
    text: {
        marginTop: 20,
        textAlign: "justify",
        color: "white",
        fontSize: 15
    },
    paragrafo: {
        marginTop: 20,
        marginLeft: 2,
        marginRight: 2,
        padding: 20,
        justifyContent: "center"
    },
    botao: {
        marginTop: 50,
        backgroundColor: "#CEE9F3",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "20%"
    }
})