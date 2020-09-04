import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const Home = React.FC = ({ navigation }) => {

  return (
    <View styles={styles.container}> 

      <FlatList
        data={}
        renderItem={}
      />

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
  }
});

export default Home;
