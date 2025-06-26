import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  SafeAreaView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
const { width, height } = Dimensions.get('window');
 
const EmailVerificationScreen = ({ navigation, route }) => {
  // Get email from navigation params or use default
  const email = route?.params?.email || 'email address';
 
  const handleChangeEmail = () => {
    // Navigate back to login screen or handle email change
    if (navigation) {
      navigation.goBack();
    }
  };
 
  const handleContinue = () => {
    // Navigate to main screen after email verification
    if (navigation && navigation.navigate) {
      navigation.navigate();
    }
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
     
      {/* Header */}
     
 
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo2.png')}
          style={styles.logo}
          resizeMode="contain"
          fadeDuration={0}
        />
      </View>
 
      {/* Main Content Card */}
      <View style={styles.contentCard}>
        <View style={styles.iconContainer}>
          <FontAwesome name="paper-plane" size={40} color="#ffffff" />
        </View>
       
        <Text style={styles.mainTitle}>
          Check your email to{'\n'}finish signing up
        </Text>
       
        <Text style={styles.subtitle}>
          We sent your email to{'\n'}{email}
        </Text>
      </View>
 
      {/* Change Email Link */}
      <TouchableOpacity style={styles.changeEmailContainer} onPress={handleChangeEmail}>
        <Text style={styles.changeEmailText}>Change email address</Text>
      </TouchableOpacity>
 
      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue to App</Text>
      </TouchableOpacity>
 
      {/* Terms Text */}
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          By continuing you agree to Sammie AI's{' '}
          <Text style={styles.linkText}>Consumer{'\n'}Terms</Text> and{' '}
          <Text style={styles.linkText}>Usage Policy</Text>, and acknowledge their{'\n'}
          <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
 
  logoContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  logo: {
    width: 221,
    height: 125,
    resizeMode: 'contain',
  },
  contentCard: {
    backgroundColor: '#FF8A65',
    marginHorizontal: 24,
    borderRadius: 30,
    marginTop: 100,
    paddingVertical: 40,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginBottom: 30,
  },
  iconContainer: {
    marginBottom: 24,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 20,
    opacity: 0.9,
  },
  changeEmailContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  changeEmailText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    textDecorationLine: 'underline',
  },
  continueButton: {
    backgroundColor: '#FF8A65',
    marginHorizontal: 24,
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 40,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  termsContainer: {
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  termsText: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 18,
  },
  linkText: {
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
});
 
export default EmailVerificationScreen;