import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Pfies() {

    
    return (

        <View style={styles.container}>
            <Text style={{ textAlign: "justify", color: "white", fontSize: 17, fontWeight: "bold", marginTop: 20, marginLeft: 20 }}>O que é o P-FIES?</Text>
            <View style={styles.paragrafo}>
                <Text style={styles.text}> 
                O Programa de Financiamento Estudantil (P-Fies) é uma modalidade do Fies. Este é destinado a estudantes que tenham renda per capita familiar mensal de até cinco salários mínimos. Diferente do Fies, neste caso, ao concluir a faculdade e começar o pagamento das mensalidades há cobrança de juros. É ofertado pelos bancos, mas com recursos pú- blicos.
            </Text>
                <Text style={styles.text}>
                Para participar, o candidato também deve ter feito alguma edição do Enem a partir de 2010 e obtido média mínima de 450 pontos nas provas objetivas e maior que zero na redação.
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