import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Prouni() {

    
    return (

        <View style={styles.container}>
            <Text style={{ textAlign: "justify", color: "white", fontSize: 17, fontWeight: "bold", marginTop: 20, marginLeft: 20 }}>O que é PROUNI?</Text>
            <View style={styles.paragrafo}>
                <Text style={styles.text}>
                O PROUNI é o Programa Universidade Para Todos, que promove o acesso às universidades particulares brasileiras para estudantes de baixa renda que tenham estudado o ensino médio exclusivamente em escola pública, ou como bolsista integral em escola particular.
                 </Text>

                <Text style={styles.text}>
                O Prouni é um dos programas do governo federal que atua com a concessão de bolsas de estudo em instituições particulares de educação supe- rior, em cursos de graduação e sequenciais de formação específica. As bolsas são destinadas a quem fez o Enem e obteve média igual ou supe- rior a 450 pontos e mais que zero na redação. Além disso, é preciso ter renda familiar per capita máxima de três salários mínimos.</Text>
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
    textBotao: {
        marginTop: 4,
        textAlign: "justify",
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
    }
})