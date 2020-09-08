import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function MantenhaOEquilibrio() {
 return (

   <View style={styles.container}>
       <Text style={{textAlign: "justify",color: "white",  fontSize: 17, fontWeight: "bold", marginTop: 20, marginLeft: 20}}>Mantenha o equilíbrio</Text>
       <View style={styles.paragrafo}>
            <Text style={styles.text}>
            Apesar do ano atípico, cheio de alterações, a maneira de estudar não muda. Em termos de conteúdo, não tem novidades. Mas, com as alterações nas datas e muitas provas remarca- das para meses depois do que previa o calendá- rio inicial, há o risco de o aluno ficar cansado antes da hora, por já ter dado o seu máximo antes do vestibular.
            </Text>

            <Text style={styles.text}>
            Para evitar esse problema e conseguir manter o bom desempenho no estudo até a semana da prova, é preciso manter o equilíbrio da carga diária de estudos desde já. Nesse sentido, estudar de madrugada e abrir mão das horas de sono necessárias é um erro gigantesco. Neto aconselha que o jovem deve dormir, pelo menos, seis horas.
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