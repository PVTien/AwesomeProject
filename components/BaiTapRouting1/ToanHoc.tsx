import {Pressable, StyleSheet, Text, View} from 'react-native';

function ToanHoc({navigation}: any) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable
        style={stylesBtn.btn}
        onPress={() => {
          navigation.navigate('Caculator');
        }}>
        <Text style={stylesBtn.btnText}>Cộng, trừ, nhân, chia</Text>
      </Pressable>

      <Pressable
        style={stylesBtn.btn}
        onPress={() => {
          navigation.navigate('PTBNhat');
        }}>
        <Text style={stylesBtn.btnText}>Phương trình bậc 1</Text>
      </Pressable>
      <Pressable
        style={stylesBtn.btn}
        onPress={() => {
          navigation.navigate('PTBHai');
        }}>
        <Text style={stylesBtn.btnText}>Phương trình bậc 2</Text>
      </Pressable>
    </View>
  );
}

export const stylesBtn = StyleSheet.create({
  btn: {
    width: 300,
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'pink',
    borderRadius: 10,
    borderWidth: 1,
  },
  btnText: {
    fontSize: 25,
    textAlign: 'center',
  },
});

export default ToanHoc;
