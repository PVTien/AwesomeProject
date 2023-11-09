import {Text, Pressable, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  clearClickAction,
  equalClickAction,
  numberClickAction,
  operatorClickAction,
} from './store/calculatorActions';

function KeyboardScreen({
  keyName,
  bgColor,
  flexKey = 1,
  colorKey = 'white',
}: any) {
  const dispatch = useDispatch();

  const clickKeyboard = () => {
    switch (keyName) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        dispatch(numberClickAction(keyName));
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        dispatch(operatorClickAction(keyName));
        break;
      case '=':
        dispatch(equalClickAction());
        break;
      case 'AC':
        dispatch(clearClickAction());
        break;
    }
  };

  return (
    <Pressable
      style={[
        keyboardStyles.keyboardItem,
        {flex: flexKey, backgroundColor: bgColor.backgroundColor},
      ]}
      onPress={clickKeyboard}>
      <Text style={[keyboardStyles.keyboardText, {color: colorKey}]}>
        {keyName}
      </Text>
    </Pressable>
  );
}

const keyboardStyles = StyleSheet.create({
  keyboardItem: {
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardText: {
    fontSize: 50,
    fontWeight: '300',
  },
});

export default KeyboardScreen;
