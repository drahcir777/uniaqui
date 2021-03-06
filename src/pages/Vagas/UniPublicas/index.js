import React from 'react';
import { View, Text, FlatList, StyleSheet, Linking, Button } from 'react-native';

import faculdadesParticulares from '../../../faculdades/faculdade-publicas';


export default function UniPublicas() {

    return (
        <View style={styles.container}>

            <View style={styles.inner}>
                <FlatList
                    data={faculdadesParticulares}
                    renderItem={({ item }) => (
                        <View style={styles.list}>
                            <View style={styles.separar}>
                            <Text style={styles.title}>
                                {item.nome}
                            </Text>
                            </View>
                            <View style={styles.botao}>
                            <Button onPress={() => (Linking.openURL(`${item.url}`))}
                                title="Ir para o site"
                            />
                            </View>
                        </View>
                    )}
                />
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
        flexDirection: "row",
        flexWrap: "wrap"
      },
      list: {
        backgroundColor: '#EDAABC',
        padding: 1,
        marginVertical: 8,
        marginHorizontal: 8,
        height: 85,
        justifyContent: "space-between",
        borderRadius: 14
      },
      inner: {
        flex: 1,
        backgroundColor: "#6EC7DE",
        alignItems: "center",
        justifyContent: "center"
      },
      title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        textAlign: "center"
      },
      botao: {
        width: "100%"
      },
      separar: {
         marginTop: 5
         
      }
});