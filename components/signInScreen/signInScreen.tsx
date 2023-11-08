import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Pressable,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function SignInScreen() {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
        source={{
          uri: 'https://worldofprintables.com/wp-content/uploads/2023/06/Pastel-Clouds-Sky-Background.jpg',
        }}>
        <LinearGradient
          style={{
            width: '100%',
            height: '80%',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
          colors={[
            'rgba(255, 255, 255, 0)',
            'rgba(255, 255, 255, 0.9)',
            'rgba(255, 255, 255, 1)',
          ]}>
          <TextInput
            style={[signInStyles.inputSignIn]}
            placeholder="Username"
          />
          <TextInput
            style={[signInStyles.inputSignIn]}
            placeholder="Password"
          />
          <Pressable style={[signInStyles.btnSignIn]}>
            <Text style={[signInStyles.btnTextSignIn]}>SIGN IN</Text>
          </Pressable>
          <Text style={{color: '#5472dd', fontSize: 20}}>Forgot password?</Text>
          <Text
            style={{
              fontSize: 22,
              color: '#333',
              marginTop: 50,
              marginBottom: 30,
            }}>
            © PiA 2.5
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const signInStyles = StyleSheet.create({
  inputSignIn: {
    width: 350,
    height: 70,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 22,
    fontSize: 25,
    paddingLeft: 30,
    backgroundColor: '#fff',
  },
  btnSignIn: {
    width: 350,
    height: 70,
    backgroundColor: '#3366ff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  btnTextSignIn: {
    color: '#fff',
    fontSize: 25,
  },
});

export default SignInScreen;
