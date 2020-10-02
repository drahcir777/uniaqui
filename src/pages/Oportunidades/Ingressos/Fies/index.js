import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Fies() {

    
    return (

        <View style={styles.container}>
            <Text style={{ textAlign: "justify", color: "white", fontSize: 17, fontWeight: "bold", marginTop: 20, marginLeft: 20 }}>O que é FIES</Text>
            <View style={styles.paragrafo}>
                <Text style={styles.text}>
                O Fundo de Financiamento Estudantil (Fies) é um programa do Ministério da Educação destinado a financiar prioritariamente estudantes de cursos de graduação. O estudante interessado em obter financiamento para o curso superior deve inscrever-se no processo seletivo do Fies, conduzido pela Secretaria de Educação Superior.
            </Text>

                <Text style={styles.text}>
                O Fies se tornou um processo seletivo e para conseguir financiar o curso utilizando o benefí- cio é necessário ter feito alguma edição do Enem a partir de 2010 e obtido média mínima de 450 pontos nas provas objetivas e maior que zero na redação. A renda per capita familiar é outro critério da seletiva, não pode ser maior que três salários mínimos. Não há cobrança de juros e é ofertado pelo governo diretamente ao estudante.
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