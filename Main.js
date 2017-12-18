import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, Text } from 'react-native';

import Pdf from 'react-native-pdf';
import { Actions } from 'react-native-router-flux';
export default class Main extends React.Component {
    PDF(){
        Actions.pdf();
    }
    
    render() {
            

        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center',backgroundColor: '#DDDDDD',padding: 40,  borderRadius:12, backgroundColor: 'white'}}>
                <TouchableOpacity onPress={this.PDF} >
                   <Text>PDF </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
  }
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
   }
});