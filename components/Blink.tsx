import {PropsWithChildren, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type BlinkProps = PropsWithChildren<{text: string}>;

export default function Blink(props: BlinkProps): JSX.Element {
  const [isShowingText, setIsShowingText] = useState(true);

  useEffect(() => {
    const toggle = setInterval(() => {
      setIsShowingText(!isShowingText);
    }, 1000);

    return () => {
      clearInterval(toggle);
    };
  });

  if (!isShowingText) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textBlue}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    alignItems: 'center',
  },
  textBlue: {
    color: 'blue',
    fontSize: 30,
    fontWeight: '700',
  },
  textRed: {
    color: 'red',
    fontSize: 20,
    fontWeight: '300',
  },
});
