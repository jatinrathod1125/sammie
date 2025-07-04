import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import EmailVerificationScreen from './src/screens/EmailVerificationScreen';
import MainScreen from './src/screens/MainScreen';
import SideMenuScreen from './src/screens/SideMenuScreen';
 
function App(): React.JSX.Element {
  const [showSplash, setShowSplash] = useState(true);
  const [currentScreen, setCurrentScreen] = useState('login'); // 'splash', 'login', 'email', 'main', 'sidemenu'
  const [userEmail, setUserEmail] = useState('');
 
  useEffect(() => {
    // Show splash screen for 3 seconds then switch to login screen
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
 
    return () => clearTimeout(timer);
  }, []);
 
  // Navigation functions
  const navigateToEmailVerification = (email: string) => {
    setUserEmail(email);
    setCurrentScreen('email');
  };
 
  const navigateToLogin = () => {
    setCurrentScreen('login');
  };
 
  const navigateToMain = () => {
    setCurrentScreen('main');
  };
 
  const navigateToSideMenu = () => {
    setCurrentScreen('sidemenu');
  };
 
  const navigateBackToMain = () => {
    setCurrentScreen('main');
  };
 
  const renderScreen = () => {
    if (showSplash) return <SplashScreen />;
   
    switch (currentScreen) {
      case 'login':
        return <LoginScreen navigation={{ navigate: navigateToEmailVerification }} />;
      case 'email':
        return <EmailVerificationScreen
          route={{params: {email: userEmail}}}
          navigation={{ goBack: navigateToLogin, navigate: navigateToMain }}
        />;
      case 'main':
        return <MainScreen navigation={{ goBack: navigateToLogin, navigateToSideMenu: navigateToSideMenu }} />;
      case 'sidemenu':
        return <SideMenuScreen navigation={{ goBack: navigateBackToMain }} onClose={navigateBackToMain} />;
      default:
        return <LoginScreen navigation={{ navigate: navigateToEmailVerification }} />;
    }
  };
 
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={showSplash ? "light-content" : "dark-content"}
        backgroundColor="#ffffff"
        translucent={false}
      />
      {renderScreen()}
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