import {useEffect} from 'react';
import {Text, View} from 'react-native';

function Welcome({navigation}: any) {
  useEffect(() => {
    const timeId = setTimeout(() => {
      navigation.navigate('Math');
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Text style={{fontSize: 80, color: 'pink'}}>Welcome</Text>
    </View>
  );
}

export default Welcome;
