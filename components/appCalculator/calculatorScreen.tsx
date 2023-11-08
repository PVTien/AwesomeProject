import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  ImageBackground,
} from 'react-native';
import KeyboardScreen from './keyboard.component';
import {useSelector} from 'react-redux';

function CalculatorScreen() {
  const showCalculate = useSelector(
    (state: any) => state.calculatorReducer.showCalculate,
  );
  console.log(showCalculate);

  return (
    <View style={{flex: 1}}>
      <View style={[calculatorStyles.screenResult, {flex: 3}]}>
        <ScrollView style={{flex: 2}} horizontal>
          <Text style={calculatorStyles.textResult}>{showCalculate}</Text>
        </ScrollView>
        <Text style={[calculatorStyles.textResult, {flex: 1}]}>0</Text>
      </View>
      <View style={{flex: 7}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <KeyboardScreen
            keyName={'AC'}
            bgColor={calculatorStyles.colorOther}
            colorKey="#060606"
          />
          <KeyboardScreen
            keyName={'+/-'}
            bgColor={calculatorStyles.colorOther}
            colorKey="#060606"
          />
          <KeyboardScreen
            keyName={'%'}
            bgColor={calculatorStyles.colorOther}
            colorKey="#060606"
          />
          <KeyboardScreen
            keyName={'/'}
            bgColor={calculatorStyles.colorOperator}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <KeyboardScreen
            keyName={'7'}
            bgColor={calculatorStyles.colorNumber}
          />
          <KeyboardScreen
            keyName={'8'}
            bgColor={calculatorStyles.colorNumber}
          />
          <KeyboardScreen
            keyName={'9'}
            bgColor={calculatorStyles.colorNumber}
          />
          <KeyboardScreen
            keyName={'*'}
            bgColor={calculatorStyles.colorOperator}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <KeyboardScreen
            keyName={'4'}
            bgColor={calculatorStyles.colorNumber}
          />
          <KeyboardScreen
            keyName={'5'}
            bgColor={calculatorStyles.colorNumber}
          />
          <KeyboardScreen
            keyName={'6'}
            bgColor={calculatorStyles.colorNumber}
          />
          <KeyboardScreen
            keyName={'-'}
            bgColor={calculatorStyles.colorOperator}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <KeyboardScreen
            keyName={'1'}
            bgColor={calculatorStyles.colorNumber}
          />
          <KeyboardScreen
            keyName={'2'}
            bgColor={calculatorStyles.colorNumber}
          />
          <KeyboardScreen
            keyName={'3'}
            bgColor={calculatorStyles.colorNumber}
          />
          <KeyboardScreen
            keyName={'+'}
            bgColor={calculatorStyles.colorOperator}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <KeyboardScreen
            keyName={'0'}
            bgColor={calculatorStyles.colorNumber}
            flexKey={2}
          />
          <KeyboardScreen
            keyName={'.'}
            bgColor={calculatorStyles.colorNumber}
          />
          <KeyboardScreen
            keyName={'='}
            bgColor={calculatorStyles.colorOperator}
          />
        </View>
      </View>
    </View>
  );
}

const calculatorStyles = StyleSheet.create({
  screenResult: {
    backgroundColor: '#000000',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  textResult: {
    color: 'white',
    fontSize: 80,
    fontWeight: '300',
  },
  colorNumber: {
    backgroundColor: '#414141',
  },
  colorOperator: {
    backgroundColor: '#ff920f',
  },
  colorOther: {
    backgroundColor: '#d6d6d6',
  },
});

export default CalculatorScreen;
