import {View, Pressable, Text} from 'react-native';
import {stylesBtn} from './BaiTapRouting1/ToanHoc';

function HomeScreen({navigation}: any) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable
        style={stylesBtn.btn}
        onPress={() => {
          navigation.navigate('Welcome');
        }}>
        <Text style={stylesBtn.btnText}>Máy tính</Text>
      </Pressable>
      <Pressable
        style={stylesBtn.btn}
        onPress={() => {
          navigation.navigate('UserCRUD');
        }}>
        <Text style={stylesBtn.btnText}>Quản lý người dùng</Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;
