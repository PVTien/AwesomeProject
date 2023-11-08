import {View, Button, Text} from 'react-native';

function News({navigation, route}: any) {
  const {newsId, otherParams} = route.params;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>News Screen</Text>
      <Text>News ID: {JSON.stringify(newsId)}</Text>
      <Text>Other Params: {JSON.stringify(otherParams)}</Text>
      <Button
        title="Go to News again"
        onPress={() => {
          navigation.push('News', {newsId: Math.floor(Math.random() * 100)});
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="Go to Home Page"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Button
        title="Go to first screen in stack"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
}

export default News;
