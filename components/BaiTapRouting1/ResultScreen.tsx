import {View, Text} from 'react-native';

function ResultScreen({route}: any) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 25, padding: 10}}>{route.params.result}</Text>
    </View>
  );
}

export default ResultScreen;
