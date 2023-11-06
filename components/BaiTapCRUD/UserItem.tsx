import {View, Text, Pressable, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {stylesBtnCRUD} from './UserCRUD';
import {
  deleteUserAction,
  getInfo,
  inputEmailAction,
  inputNameAction,
} from './store/userActions';

function UserItem({nameUser, emailUser, idx}: any) {
  const dispatch = useDispatch();

  const getInfoUser = () => {
    dispatch(getInfo());
    dispatch(inputNameAction(nameUser));
    dispatch(inputEmailAction(emailUser));
  };

  const deleteItem = () => {
    Alert.alert(
      'Xác nhận!',
      'Bạn muốn xóa người dùng này?',
      [
        {
          text: 'Có',
          onPress: () => dispatch(deleteUserAction(idx)),
        },
        {
          text: 'Không',
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
      }}>
      <View style={{marginRight: 20}}>
        <Text style={{fontSize: 25, marginBottom: 30, width: 250}}>
          {nameUser}
        </Text>
        <Text style={{fontSize: 25, width: 250}}>{emailUser}</Text>
      </View>
      <View>
        <Pressable style={stylesBtnCRUD.btnCRUD} onPress={getInfoUser}>
          <Text style={stylesBtnCRUD.btnTextCRUD}>Sửa</Text>
        </Pressable>
        <Pressable style={stylesBtnCRUD.btnCRUD} onPress={deleteItem}>
          <Text style={stylesBtnCRUD.btnTextCRUD}>Xóa</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default UserItem;
