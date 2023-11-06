import {useEffect} from 'react';
import {View, Text, Button} from 'react-native';

function Home({navigation, route}: any) {
  const {newsId, otherParams} = route.params;
  useEffect(() => {
    if (route.params?.post) {
      console.error('None');
    }
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Text>News ID: {JSON.stringify(newsId)}</Text>
      <Text>Other Params: {JSON.stringify(otherParams)}</Text>
      <Button
        title="Move to News Page"
        onPress={() => {
          navigation.navigate('News', {newsId: 15, otherParams: 'otherParams'});
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          navigation.setParams({otherParams: 'Home'});
        }}
      />

      <Text style={{color: 'red'}}>Post: {route.params?.post}</Text>
      <Button
        title="Create Post"
        onPress={() => {
          navigation.navigate('Post');
        }}
      />
    </View>
  );
}

export default Home;
