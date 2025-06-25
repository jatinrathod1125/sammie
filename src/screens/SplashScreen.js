import React, { useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation = null }) => {
  useEffect(() => {
    // Auto navigate after 3 seconds (you can adjust this)
    const timer = setTimeout(() => {
      // Replace 'Home' with your main screen name
      // Only navigate if navigation prop is provided
      if (navigation) {
        // navigation.replace('Home');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
          fadeDuration={0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 221,
    height: 125,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
