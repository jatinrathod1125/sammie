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
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const SupportScreen = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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
    console.log('Support form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
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
            We will get back to you shortly!
          </Text>
        </View>
      </View>
    );
  }

  // Support Form Screen (First Image)
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
        <Text style={styles.headerTitle}>Support</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Form Content */}
      <ScrollView style={styles.formContent} showsVerticalScrollIndicator={false}>
        {/* Name Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>NAME</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter name here"
            placeholderTextColor="#999999"
            value={formData.name}
            onChangeText={(text) => handleInputChange('name', text)}
          />
        </View>

        {/* Email Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>EMAIL ADDRESS</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Account Email Should Be Prefilled Here"
            placeholderTextColor="#999999"
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Message Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>HOW CAN WE HELP?</Text>
          <TextInput
            style={styles.messageInput}
            placeholder="What can we do to make this right?"
            placeholderTextColor="#999999"
            value={formData.message}
            onChangeText={(text) => handleInputChange('message', text)}
            multiline
            numberOfLines={8}
            textAlignVertical="top"
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8A65',
  },
  // Support Form Styles
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
  },
  fieldContainer: {
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  textInput: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: '#333333',
    minHeight: 50,
  },
  messageInput: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: '#333333',
    minHeight: 120,
    maxHeight: 200,
  },
  submitButton: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
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
  },
});

export default SupportScreen; 