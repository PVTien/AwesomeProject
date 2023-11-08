import {Text, Pressable, View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {numberClickAction} from './store/calculatorActions';

function KeyboardScreen({
  keyName,
  bgColor,
  flexKey = 1,
  colorKey = 'white',
}: any) {
  const dispatch = useDispatch();

  const clickNumber = () => {
    dispatch(numberClickAction(keyName));
  };

  return (
    <Pressable
      style={[
        keyboardStyles.keyboardItem,
        {flex: flexKey, backgroundColor: bgColor.backgroundColor},
      ]}
      onPress={clickNumber}>
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
