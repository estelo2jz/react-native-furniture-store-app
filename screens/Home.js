import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text
} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white.
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  }
})

export default Home;
