import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const RequestNewFeaturesScreen = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [featureRequest, setFeatureRequest] = useState('');

  const handleBackPress = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleClosePress = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleSubmit = () => {
    console.log('Feature request submitted:', featureRequest);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    // Thank You Screen (Second Image)
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#FF8A65" />
        
        {/* Header with Close Button */}
        <View style={styles.thankYouHeader}>
          <TouchableOpacity style={styles.closeButton} onPress={handleClosePress}>
            <FontAwesome name="times" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>

        {/* Thank You Content */}
        <View style={styles.thankYouContent}>
          <View style={styles.heartIcon}>
            <FontAwesome name="heart" size={60} color="#ffffff" />
          </View>
          
          <Text style={styles.thankYouTitle}>
            Thank you for{'\n'}reaching out!
          </Text>
          
          <Text style={styles.thankYouSubtitle}>
            You are the best!{'\n'}Stay Amazing!{'\n'}Stay Awesome!
          </Text>
        </View>
      </View>
    );
  }

  // Request New Features Form Screen (First Image)
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="light-content" backgroundColor="#FF8A65" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <FontAwesome name="chevron-left" size={20} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Request New Features</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Form Content */}
      <View style={styles.formContent}>
        {/* Feature Request Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.featureInput}
            placeholder="What do you want to see next? Who knows, it could become a reality!"
            placeholderTextColor="#999999"
            value={featureRequest}
            onChangeText={setFeatureRequest}
            multiline
            numberOfLines={10}
            textAlignVertical="top"
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8A65',
  },
  // Request Features Form Styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'ios' ? 15 : 20,
    backgroundColor: '#FF8A65',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    color: '#ffffff',
    flex: 1,
    textAlign: 'center',
  },
  headerSpacer: {
    width: 40,
  },
  formContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 1,
    marginBottom: 20,
  },
  featureInput: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 16,
    color: '#333333',
    height: '100%',
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  submitButtonText: {
    fontSize: 16,
    color: '#FF8A65',
    fontWeight: '600',
  },
  // Thank You Screen Styles
  thankYouHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 20,
  },
  closeButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thankYouContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  heartIcon: {
    marginBottom: 40,
  },
  thankYouTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 38,
  },
  thankYouSubtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 24,
  },
});

export default RequestNewFeaturesScreen; 