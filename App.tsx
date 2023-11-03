/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Blink from './components/Blink';
import HomeScreen from './components/Home';
import NewsScreen from './components/News';
import CreatePost from './components/Post';
import Welcome from './components/BaiTapRouting1/Welcome';
import ToanHoc from './components/BaiTapRouting1/ToanHoc';
import LogoHeader from './components/BaiTapRouting1/LogoHeader';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// interface Movie {
//   id: string;
//   title: string;
//   releaseYear: string;
// }

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function Item({title}: SectionProps): JSX.Element {
//   return (
//     <View style={styles.itemStyle}>
//       <Text style={styles.itemTitle}>{title}</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  // const DATA = [
  //   {
  //     id: '1',
  //     title: 'First Item',
  //   },
  //   {
  //     id: '2',
  //     title: 'Second Item',
  //   },
  //   {
  //     id: '3',
  //     title: 'Third Item',
  //   },
  // ];

  // const [text, setText] = useState('');
  // const [isLoading, setLoading] = useState(true);
  // const [moviesList, setMoviesList] = useState<Movie[]>([]);

  // const getMovies = async () => {
  //   try {
  //     let response = await fetch('https://reactnative.dev/movies.json');
  //     let json = await response.json();
  //     setMoviesList(json.movies);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getMovies();
  // }, []);

  return (
    // <View style={{flex: 1}}>
    //   <TextInput
    //     style={{
    //       height: 50,
    //       borderColor: 'gray',
    //       borderWidth: 2,
    //       margin: 10,
    //     }}
    //     value={text}
    //     onChangeText={text => {
    //       setText(text);
    //     }}
    //   />

    //   <SafeAreaView style={{flex: 1}}>
    //     <ScrollView horizontal>
    //       <Text>
    //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
    //         sit, pariatur cumque aliquam beatae soluta perferendis harum
    //         officiis provident nisi architecto incidunt consequuntur impedit
    //         deleniti quasi adipisci dolor unde velit.
    //       </Text>
    //     </ScrollView>
    //   </SafeAreaView>

    //   <SafeAreaView style={styles.container}>
    //     <FlatList
    //       data={DATA}
    //       renderItem={({item}) => <Item title={item.title} />}
    //       keyExtractor={item => item.id}
    //     />
    //   </SafeAreaView>

    //   <SafeAreaView>
    //     {isLoading ? (
    //       <ActivityIndicator />
    //     ) : (
    //       <FlatList
    //         data={moviesList}
    //         renderItem={({item}) => (
    //           <Text>
    //             {item.title} {item.releaseYear}
    //           </Text>
    //         )}
    //         keyExtractor={({id}) => id}
    //       />
    //     )}
    //   </SafeAreaView>
    // </View>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{newsId: 20}}
        />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="Post" component={CreatePost} /> */}

        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Math"
          component={ToanHoc}
          options={{
            title: 'Toán học',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'pink',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  itemStyle: {
    backgroundColor: 'pink',
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  itemTitle: {
    fontSize: 32,
  },
});

export default App;
