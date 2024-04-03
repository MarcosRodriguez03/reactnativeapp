import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import NavbarComponent from './components/NavbarComponent';
import StoriesComponent from './components/StoriesComponent';
import PostComponent from './components/PostComponent';
import FooterComponent from './components/FooterComponent';

export default function App() {

  return (

    <View style={styles.container}>
      <NavbarComponent />
      <StoriesComponent />
      {/* <PostComponent/> */}
      <FooterComponent />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',

  },
});
