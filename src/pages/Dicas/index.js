import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Dicas() {

 return (

   <View style={styles.container}>
       <Text style={{textAlign: "justify",color: "white",  fontSize: 17, fontWeight: "bold", marginTop: 20, marginLeft: 20}}>No dia do vestibular ALIMENTE-SE BEM:</Text>
       <View style={styles.paragrafo}>
            <Text style={styles.text}>
            A alimentação também é importante na hora da prova. Como os exames duram, comumente, mais de duas horas, o estudante precisa ter energia e concentração. Veja algumas dicas:
            </Text>

            <Text style={styles.text}>
            1. É importante manter a alimentação equili- brada e não fazer nenhuma grande mudança no que é consumido;
            </Text>

            <Text style={styles.text}>
            2. Tanto no dia da prova quanto no anterior, dê preferência a alimentos leves e com pouca gordura para facilitar a digestão;
            </Text>
            <Text style={styles.text}>
            3. No dia do vestibular, caso a prova se no período da manhã, tome um café da manhã reforçado, dando preferência a carboidratos integrais;
            </Text>
            <Text style={styles.text}>
            4. Caso a prova seja à tarde, prefira fazer a refeição em casa para não correr o risco de comer algo que você não sabe como foi prepa- rado;
            </Text>
            <Text style={styles.text}>
            5. Como lanche durante o vestibular, leve frutas fáceis de comer (como maçã e banana), mix de castanhas, barrinhas de cereal, biscoitos
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