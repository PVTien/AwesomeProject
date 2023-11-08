import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import NewsItemCarousel from './newsItemCarousel';
import PostItem from './postItem';

function NewsScreen() {
  const DATA = [
    {
      title: 'See the Best Place Diving in the World',
      img: 'https://img.freepik.com/premium-photo/underwater-diving-sport-deep-sea-landscape-freediving-instructor-swimming-blue-sea-water_327903-676998.jpg',
    },
    {
      title: 'Mount Everest',
      img: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Mount_Everest_as_seen_from_Drukair2_PLW_edit_Cropped.jpg',
    },
    {
      title: 'The Amazon Rainforest',
      img: 'https://www.peruforless.com/content-files/uploads/v2/d-amazonas-puerto-jungle.jpg',
    },
    {
      title: 'Vietnam',
      img: 'https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2022_06_06/ha_long.jpg',
    },
  ];

  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <View
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          top: 0,
          backgroundColor: '#0a87fd',
          height: 120,
          zIndex: 999,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, color: '#fff', fontWeight: 'bold'}}>
          News
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 350,
            backgroundColor: '#3fa4fc',
            borderRadius: 10,
            paddingLeft: 30,
            color: '#fff',
          }}
          placeholder="Search"
          placeholderTextColor={'#f3fdff'}
        />
      </View>
      {/* Navbar */}
      <View
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 0,
          backgroundColor: '#fff',
          height: 70,
          zIndex: 999,
          flexDirection: 'row',
        }}>
        <View style={newsScreenStyles.btnNav}>
          <Text style={[newsScreenStyles.btnNavText, {color: '#0a87fd'}]}>
            Home
          </Text>
        </View>
        <View style={newsScreenStyles.btnNav}>
          <Text style={newsScreenStyles.btnNavText}>Announcements</Text>
        </View>
        <View style={newsScreenStyles.btnNav}>
          <Text style={newsScreenStyles.btnNavText}>Notifications</Text>
        </View>
        <View style={newsScreenStyles.btnNav}>
          <Text style={newsScreenStyles.btnNavText}>Members</Text>
        </View>
      </View>
      {/* Carousel */}
      <View style={newsScreenStyles.carouselStyle}>
        <SwiperFlatList
          autoplay
          autoplayDelay={3}
          autoplayLoop
          showPagination
          paginationActiveColor="#0a87fd"
          data={DATA}
          renderItem={({item}) => (
            <NewsItemCarousel titleItem={item.title} imgItem={item.img} />
          )}></SwiperFlatList>
      </View>
      {/* Posts */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginBottom: 70,
          backgroundColor: '#eee',
        }}>
        <FlatList
          style={{width: '90%'}}
          data={DATA}
          renderItem={({item}) => (
            <PostItem titleItem={item.title} imgItem={item.img} />
          )}
        />
      </View>
    </View>
  );
}

const newsScreenStyles = StyleSheet.create({
  btnNav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNavText: {
    fontSize: 12,
  },
  carouselStyle: {
    backgroundColor: '#eee',
    marginTop: 120,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.2,
  },
});

export default NewsScreen;
