import {
  View,
  TextInput,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {InputStyles} from '../BaiTapRouting1/TinhToan';
import {stylesBtn} from '../BaiTapRouting1/ToanHoc';
import UserItem from './UserItem';
import {
  inputEmailAction,
  inputNameAction,
  saveListUserAction,
  setIsUpdateAction,
  updateUserAction,
} from './store/userActions';

function UserCRUD() {
  const inputName = useSelector((state: any) => state.userReducer.inputName);
  const inputEmail = useSelector((state: any) => state.userReducer.inputEmail);
  const listUser = useSelector((state: any) => state.userReducer.listUser);
  const isUpdate = useSelector((state: any) => state.userReducer.isUpdate);
  const idxUpdate = useSelector((state: any) => state.userReducer.idxUpdate);

  const dispatch = useDispatch();

  const saveInfo = () => {
    if (inputName === '' || inputEmail === '') {
      Alert.alert('Lưu ý!', 'Thông tin không được để trống.');
    } else {
      dispatch(saveListUserAction());
      dispatch(inputNameAction(''));
      dispatch(inputEmailAction(''));
    }
  };

  const resetInput = () => {
    if (isUpdate) {
      dispatch(setIsUpdateAction());
    }
    dispatch(inputNameAction(''));
    dispatch(inputEmailAction(''));
  };

  const updateUser = () => {
    dispatch(updateUserAction(idxUpdate));
    dispatch(setIsUpdateAction());
    dispatch(inputNameAction(''));
    dispatch(inputEmailAction(''));
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {/* Input */}
      <View>
        <TextInput
          placeholder="Nhập tên..."
          style={InputStyles.inputText}
          onChangeText={text => dispatch(inputNameAction(text))}
          value={inputName}
        />
        <TextInput
          placeholder="Nhập email..."
          style={InputStyles.inputText}
          onChangeText={text => dispatch(inputEmailAction(text))}
          value={inputEmail}
        />
      </View>
      {/* Button */}
      <View style={{flexDirection: 'row'}}>
        <Pressable style={stylesBtnCRUD.btnAction} onPress={resetInput}>
          <Text style={stylesBtn.btnText}>Làm mới</Text>
        </Pressable>
        {isUpdate ? (
          <Pressable style={stylesBtnCRUD.btnAction} onPress={updateUser}>
            <Text style={stylesBtn.btnText}>Cập nhật</Text>
          </Pressable>
        ) : (
          <Pressable style={stylesBtnCRUD.btnAction} onPress={saveInfo}>
            <Text style={stylesBtn.btnText}>Lưu</Text>
          </Pressable>
        )}
      </View>
      {/* List User */}
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={listUser}
          renderItem={({item, index}) => (
            <UserItem nameUser={item.name} emailUser={item.email} idx={index} />
          )}
          keyExtractor={(item, index) => String(index)}
        />
      </SafeAreaView>
    </View>
  );
}

export const stylesBtnCRUD = StyleSheet.create({
  btnAction: {
    ...stylesBtn.btn,
    width: 140,
    height: 60,
    marginHorizontal: 10,
  },
  btnCRUD: {
    ...stylesBtn.btn,
    width: 80,
    height: 50,
  },
  btnTextCRUD: {
    ...stylesBtn.btnText,
    fontSize: 20,
  },
});

export default UserCRUD;
