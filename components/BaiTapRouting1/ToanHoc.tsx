import {Button, Pressable, StyleSheet, Text, View} from 'react-native';

function ToanHoc() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Cộng, trừ, nhân, chia</Text>
      </Pressable>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Phương trình bậc 1</Text>
      </Pressable>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Phương trình bậc 2</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 350,
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'pink',
    borderRadius: 10,
    borderWidth: 1,
  },
  btnText: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default ToanHoc;
