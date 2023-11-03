import {Image, View, Text} from 'react-native';

interface propsLogo {
  title: string;
}

function LogoHeader({title}: propsLogo): JSX.Element {
  return (
    <View>
      <Image
        style={{width: 50, height: 50, borderRadius: 10}}
        source={{
          uri: 'https://w7.pngwing.com/pngs/186/205/png-transparent-react-native-react-logos-brands-icon.png',
        }}
      />
      <Text>{title}</Text>
    </View>
  );
}

export default LogoHeader;
