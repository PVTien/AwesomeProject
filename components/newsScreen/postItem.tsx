import {View, Text, Image, StyleSheet} from 'react-native';

function PostItem({titleItem, imgItem}: any) {
  return (
    <View style={postStyles.postItemStyle}>
      <Image style={{height: '100%', width: '30%'}} source={{uri: imgItem}} />
      <View
        style={{
          width: '70%',
          padding: 10,
          backgroundColor: '#fff',
        }}>
        <Text style={{color: '#0a87fd'}}>#lorem</Text>
        <Text style={{fontSize: 20, fontWeight: '500', color: '#000'}}>
          {titleItem}
        </Text>
        <Text style={{fontSize: 15, marginTop: 10}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas a...
        </Text>
      </View>
    </View>
  );
}

const postStyles = StyleSheet.create({
  postItemStyle: {
    height: 150,
    width: '100%',
    marginVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },
});

export default PostItem;
