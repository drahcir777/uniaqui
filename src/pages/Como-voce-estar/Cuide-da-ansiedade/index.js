import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CuideDaAnsiedade({ navigation }) {

    const oportunidades = () => (    
        navigation.navigate('Ingresso')
      )
 return (

   <View style={styles.container}>
       <Text style={{textAlign: "justify",color: "white",  fontSize: 17, fontWeight: "bold", marginTop: 20, marginLeft: 20}}>Cuide da ansiedade</Text>
       <View style={styles.paragrafo}>
            <Text style={styles.text}>
            A incerteza de retorno às aulas, e todas as dúvidas sobre os vestibulares em meio a um cenário caótico, gera ainda mais ansiedade. Para minimizar esse sentimento, o professor sugere um olhar positivo para o momento (que, sim, é muito complicado): aproveite o prolonga- mento do calendário.
            </Text>

            <Text style={styles.text}>
            “Sobre a alteração das datas das provas, se por um lado o estudante tem que tomar cuidado para não chegar cansado na reta final, por outro ele vai ter mais tempo para revisar os assuntos que são vistos ao longo do ano. Inclusive, para correr atrás das matérias atrasadas”, diz.
Outra ferramenta ótima para cuidar da saúde mental é a meditação, que, além de ser eficaz, tem materiais para sua execução de fácil acesso, em aplicativos, livros, podcasts.
            </Text>   
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#41AAC2",
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
        fontSize: 18
    },
    paragrafo: {
        marginLeft: 2,
        marginRight: 2,
        padding: 20,
        justifyContent: "center"
    },
    botao: {
        marginTop: 50,
        backgroundColor: "#6EC7DE",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "20%"
    },
    textBotao:{
        marginTop: 4,
        textAlign: "justify",
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
    }
})