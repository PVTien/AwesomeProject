import {useState} from 'react';
import {Button, TextInput, View} from 'react-native';

function CreatePost({navigation, route}: any) {
  const [postContent, setPostContent] = useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{
          height: 200,
          padding: 10,
          backgroundColor: 'white',
          borderRadius: 10,
        }}
        onChangeText={setPostContent}
        value={postContent}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: 'Home',
            params: {post: postContent},
            merge: true,
          });
        }}
      />
      <Button
        title="Nested navigator"
        onPress={() => {
          navigation.navigate('Home', {
            screen: 'News',
            params: {otherParams: 'Nested'},
          });
        }}
      />
    </View>
  );
}

export default CreatePost;
