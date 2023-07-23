import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AvailableCourseScreen from './screens/AvailableCourseScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VideosList from './screens/VideoList';
import WebView from 'react-native-webview';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    // <View>
    //     <AvailableCourseScreen />
    // </View>
  //   <NavigationContainer>
  //   <Stack.Navigator>
  //     <Stack.Screen name="Home" component={AvailableCourseScreen} />
  //     <Stack.Screen name="VideosList" component={VideosList} />
  //   </Stack.Navigator>
  // </NavigationContainer>
  // <View>
    // <WebView
    //   // style={styles.container}
    //   source={{ uri: 'https://expo.dev' }}
    // />
    <WebView
      source={{ html: '<iframe width="100%" height="100%" src="https://mega.nz/embed/9aEwBLxQ#3sZmyAv0GZd2ykEoRRzO09mzjZmTyq_C3Au8Uzn1Qdk"></iframe>' }}
      style={styles.video}
    />
  // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    transform: [{ rotate: '90deg' }],
    width:"100%",
    height:"100%"
  },
});
