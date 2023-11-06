import {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {InputStyles} from './TinhToan';
import {stylesBtn} from './ToanHoc';

function PTBacNhat({navigation}: any) {
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');

  const calculate = () => {
    if (+numberA === 0) {
      if (+numberB === 0) {
        return 'Phương trình có vô số nghiệm!';
      } else {
        return 'Phương trình vô nghiệm!';
      }
    } else {
      return `Phương trình có nghiệm: 
      x = ${-+numberB / +numberA}`;
    }
  };

  const excuteCalculate = () => {
    setNumberA('');
    setNumberB('');
    const calculateResult = calculate();
    navigation.navigate('Result', {result: calculateResult});
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TextInput
        style={InputStyles.inputText}
        placeholder="Nhập số a"
        inputMode="numeric"
        onChangeText={setNumberA}
        value={numberA}
      />
      <TextInput
        style={InputStyles.inputText}
        placeholder="Nhập số b"
        inputMode="numeric"
        onChangeText={setNumberB}
        value={numberB}
      />
      <Pressable style={stylesBtn.btn} onPress={excuteCalculate}>
        <Text style={stylesBtn.btnText}>Tính</Text>
      </Pressable>
    </View>
  );
}

export default PTBacNhat;
