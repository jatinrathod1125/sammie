import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleContinueWithEmail = () => {
    if (email.trim() && navigation) {
      // Navigate to email verification screen with email parameter
      navigation.navigate(email.trim());
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Top Section with Logo */}
      <View style={styles.topSection}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
          fadeDuration={0}
        />
      </View>

      {/* Bottom Section with Form */}
      <View style={styles.bottomSection}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.titleText}>
            Enter your email address to get started
          </Text>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.emailInput}
              placeholder="Email Address"
              placeholderTextColor="#999999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Continue with Email Button */}
          <TouchableOpacity style={styles.emailButton} onPress={handleContinueWithEmail}>
            <Text style={styles.emailButtonText}>Continue with Email</Text>
          </TouchableOpacity>

          {/* OR Divider */}
          <Text style={styles.orText}>OR</Text>

          {/* Continue with Apple Button */}
          <TouchableOpacity style={styles.appleButton}>
            <FontAwesome name="apple" size={20} color="#333333" style={styles.appleIcon} />
            <Text style={styles.appleButtonText}>Continue with Apple</Text>
          </TouchableOpacity>

          {/* Continue with Google Button */}
          <TouchableOpacity style={styles.googleButton}>
            <FontAwesome name="google" size={20} color="#ffffff" style={styles.googleIcon} />
            <Text style={styles.googleButtonText}>Continue With Google</Text>
          </TouchableOpacity>

          {/* Terms and Privacy */}
          <Text style={styles.termsText}>
            By continuing, you agree to Sammie AI's{' '}
            <Text style={styles.linkText}>Consumer Terms</Text> and{' '}
            <Text style={styles.linkText}>Usage Policy</Text>, and acknowledge their{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topSection: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 200,
    height: 80,
  },
  bottomSection: {
    flex: 0.6,
    backgroundColor: '#FF8A65',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 20,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  inputContainer: {
    marginBottom: 16,
  },
  emailInput: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    color: '#333333',
    fontWeight: '400',
  },
  emailButton: {
    backgroundColor: '#333333',
    borderRadius: 25,
    paddingVertical: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  emailButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
  },
  appleButton: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingVertical: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appleIcon: {
    marginRight: 8,
  },
  appleButtonText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '600',
  },
  googleButton: {
    backgroundColor: '#333333',
    borderRadius: 25,
    paddingVertical: 16,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    marginRight: 8,
  },
  googleButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  termsText: {
    color: '#ffffff',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
    opacity: 0.9,
  },
  linkText: {
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
});

export default LoginScreen;
 