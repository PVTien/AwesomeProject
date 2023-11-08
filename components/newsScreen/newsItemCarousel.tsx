import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';

function NewsItemCarousel({titleItem, imgItem}: any) {
  return (
    <View style={carouselItemStyles.itemStyle}>
      <ImageBackground
        borderRadius={15}
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'flex-end',
          alignItems: 'center',
          position: 'relative',
        }}
        source={{uri: imgItem}}>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: '500',
            left: 15,
            top: 15,
            position: 'absolute',
          }}>
          Trending
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: 25,
            marginBottom: 20,
            fontWeight: '500',
          }}>
          {titleItem}
        </Text>
      </ImageBackground>
    </View>
  );
}

const carouselItemStyles = StyleSheet.create({
  itemStyle: {
    width: Dimensions.get('window').width,
    padding: 30,
  },
});

export default NewsItemCarousel;
