import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Sisu() {

    
    return (

        <View style={styles.container}>
            <Text style={{ textAlign: "justify", color: "white", fontSize: 17, fontWeight: "bold", marginTop: 20, marginLeft: 20 }}>O que é SISU</Text>
            <View style={styles.paragrafo}>
                <Text style={styles.text}>
                O Sisu (Sistema de Seleção Unificada) é o sistema informatizado do Ministério da Educação, no qual instituições públicas de ensino superior (universidades públicas ou do estado) oferecem vagas para candidatos participantes do Exame Nacional do Ensino Médio (Enem).
            </Text>

                <Text style={styles.text}>
                O Enem é exigido para concorrer no SISU. Não ter zerado a redação é o principal critério e a renda familiar não é preciso ser comprovada. No entanto, há casos em que a nota das provas objetivas do Enem também conta.
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
    textBotao: {
        marginTop: 4,
        textAlign: "justify",
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
    }
})