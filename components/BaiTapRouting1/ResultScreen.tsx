import {View, Text, TextInput} from 'react-native';
import {useState, useEffect} from 'react';

function ResultScreen({route}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 30, marginTop: 20}}>{route.params.result}</Text>
    </View>
  );
}

export default ResultScreen;
