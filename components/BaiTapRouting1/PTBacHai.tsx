import {useState} from 'react';
import {View, TextInput, Text, Pressable} from 'react-native';
import {InputStyles} from './TinhToan';
import {stylesBtn} from './ToanHoc';

function PTBacHai({navigation}: any) {
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');
  const [numberC, setNumberC] = useState('');

  const calculate = () => {
    if (+numberA === 0) {
      if (+numberB === 0) {
        if (+numberC === 0) {
          return 'Phương trình có vô số nghiệm!';
        } else {
          return 'Phương trình vô nghiệm!';
        }
      } else {
        return `Phương trình có nghiệm:
        x = ${-+numberC / +numberB}`;
      }
    } else {
      const delta = +numberB * +numberB - 4 * +numberA * +numberC;
      if (delta < 0) {
        return 'Phương trình vô nghiệm!';
      } else if (delta === 0) {
        return `Phương trình có nghiệm kép: 
        x1 = x2 = ${-+numberB / (2 * +numberA)}`;
      } else {
        return `Phương trình có 2 nghiệm phân biệt: 
        x1 = ${(-+numberB + Math.sqrt(delta)) / (2 * +numberA)}, 
        x2 = ${(-+numberB - Math.sqrt(delta)) / (2 * +numberA)}`;
      }
    }
  };

  const excuteCalculate = () => {
    setNumberA('');
    setNumberB('');
    setNumberC('');
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
      <TextInput
        style={InputStyles.inputText}
        placeholder="Nhập số c"
        inputMode="numeric"
        onChangeText={setNumberC}
        value={numberC}
      />
      <Pressable style={stylesBtn.btn} onPress={excuteCalculate}>
        <Text style={stylesBtn.btnText}>Tính</Text>
      </Pressable>
    </View>
  );
}

export default PTBacHai;
