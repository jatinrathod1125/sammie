/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
  
import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';

function App(): React.JSX.Element {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Show splash screen for 3 seconds then switch to login screen
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={showSplash ? "light-content" : "dark-content"} 
        backgroundColor="#ffffff" 
        translucent={false} 
      />
      {showSplash ? <SplashScreen /> : <LoginScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;
