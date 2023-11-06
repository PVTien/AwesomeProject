import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import {useState} from 'react';
import {stylesBtn} from './ToanHoc';

function TinhToan({navigation}: any) {
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');
  const [operator, setOperator] = useState('+');

  const calculate = (operator: string) => {
    switch (operator) {
      case '+':
        return +numberA + +numberB;
      case '-':
        return +numberA - +numberB;
      case '*':
        return +numberA * +numberB;
      case '/':
        return +numberA / +numberB;
    }
  };

  const excuteCalculate = () => {
    setNumberA('');
    setNumberB('');
    const calculateResult = calculate(operator);
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
        style={{
          ...InputStyles.inputText,
          height: 50,
          width: 50,
          backgroundColor: '#fff',
          color: 'black',
          textAlign: 'center',
        }}
        editable={false}
        value={operator}
      />
      <TextInput
        style={InputStyles.inputText}
        placeholder="Nhập số b"
        inputMode="numeric"
        onChangeText={setNumberB}
        value={numberB}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <Pressable
          style={InputStyles.btnCalculator}
          onPress={() => {
            setOperator('+');
          }}>
          <Text style={stylesBtn.btnText}>+</Text>
        </Pressable>
        <Pressable
          style={InputStyles.btnCalculator}
          onPress={() => {
            setOperator('-');
          }}>
          <Text style={stylesBtn.btnText}>_</Text>
        </Pressable>
        <Pressable
          style={InputStyles.btnCalculator}
          onPress={() => {
            setOperator('*');
          }}>
          <Text style={stylesBtn.btnText}>*</Text>
        </Pressable>
        <Pressable
          style={InputStyles.btnCalculator}
          onPress={() => {
            setOperator('/');
          }}>
          <Text style={stylesBtn.btnText}>/</Text>
        </Pressable>
      </View>
      <View style={{flex: 1}}>
        <Pressable style={stylesBtn.btn} onPress={excuteCalculate}>
          <Text style={stylesBtn.btnText}>Tính</Text>
        </Pressable>
      </View>
    </View>
  );
}

export const InputStyles = StyleSheet.create({
  inputText: {
    height: 80,
    width: 300,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    fontSize: 30,
  },
  btnCalculator: {
    ...stylesBtn.btn,
    width: 60,
    height: 60,
    marginHorizontal: 10,
    alignItems: 'center',
  },
});

export default TinhToan;
