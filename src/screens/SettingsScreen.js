import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Platform,
  Modal,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BlurView } from '@react-native-community/blur';
import DataControlsScreen from './DataControlsScreen';
import SupportScreen from './SupportScreen';
import RequestNewFeaturesScreen from './RequestNewFeaturesScreen';

const { width, height } = Dimensions.get('window');

const SettingsScreen = ({ navigation, onClose }) => {
  const [isProfilePhotoModalOpen, setIsProfilePhotoModalOpen] = useState(false);
  const [isDataControlsOpen, setIsDataControlsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isRequestFeaturesOpen, setIsRequestFeaturesOpen] = useState(false);

  const handleClosePress = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleEmailPress = () => {
    console.log('Email pressed');
  };

  const handleChangeProfilePress = () => {
    console.log('Change Profile Photo pressed');
    setIsProfilePhotoModalOpen(true);
  };

  const handleProfilePhotoModalClose = () => {
    setIsProfilePhotoModalOpen(false);
  };

  const handleUploadImage = () => {
    console.log('Upload Image pressed');
    setIsProfilePhotoModalOpen(false);
  };

  const handleRemoveImage = () => {
    console.log('Remove Image pressed');
    setIsProfilePhotoModalOpen(false);
  };

  const handleDataControlsPress = () => {
    console.log('Data Controls pressed');
    setIsDataControlsOpen(true);
  };

  const handleDataControlsClose = () => {
    setIsDataControlsOpen(false);
  };

  const handleSupportPress = () => {
    console.log('Support pressed');
    setIsSupportOpen(true);
  };

  const handleSupportClose = () => {
    setIsSupportOpen(false);
  };

  const handleRequestFeaturesPress = () => {
    console.log('Request New Features pressed');
    setIsRequestFeaturesOpen(true);
  };

  const handleRequestFeaturesClose = () => {
    setIsRequestFeaturesOpen(false);
  };

  const handleTermsPress = () => {
    console.log('Terms Of Use pressed');
  };

  const handlePrivacyPress = () => {
    console.log('Privacy Policy pressed');
  };

  const handleLogOutPress = () => {
    console.log('Log Out pressed');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FF8A65" />
      
      {/* Modal handle indicator */}
      <View style={styles.modalHandle} />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
        <TouchableOpacity style={styles.closeButton} onPress={handleClosePress}>
          <FontAwesome name="times" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.contentArea} showsVerticalScrollIndicator={false}>
        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ACCOUNT</Text>
          <View style={styles.sectionContent}>
            <TouchableOpacity style={styles.menuItem} onPress={handleEmailPress}>
              <View style={styles.menuItemLeft}>
                <FontAwesome name="envelope-o" size={20} color="#333333" />
                <View style={styles.menuItemTextContainer}>
                  <Text style={styles.menuItemTitle}>Email</Text>
                  <Text style={styles.menuItemSubtitle}>sbschoolproject@gmail.com</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={handleChangeProfilePress}>
              <View style={styles.menuItemLeft}>
                <FontAwesome name="user-circle-o" size={20} color="#333333" />
                <Text style={styles.menuItemTitle}>Change Profile Photo</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#CCCCCC" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={handleDataControlsPress}>
              <View style={styles.menuItemLeft}>
                <FontAwesome name="database" size={20} color="#333333" />
                <Text style={styles.menuItemTitle}>Data Controls</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#CCCCCC" />
            </TouchableOpacity>
          </View>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ABOUT</Text>
          <View style={styles.sectionContent}>
            <TouchableOpacity style={styles.menuItem} onPress={handleSupportPress}>
              <View style={styles.menuItemLeft}>
                <FontAwesome name="question-circle-o" size={20} color="#333333" />
                <Text style={styles.menuItemTitle}>Support</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#CCCCCC" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={handleRequestFeaturesPress}>
              <View style={styles.menuItemLeft}>
                <FontAwesome name="plus-circle" size={20} color="#333333" />
                <Text style={styles.menuItemTitle}>Request New Features!</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#CCCCCC" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={handleTermsPress}>
              <View style={styles.menuItemLeft}>
                <FontAwesome name="file-text-o" size={20} color="#333333" />
                <Text style={styles.menuItemTitle}>Terms Of Use</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#CCCCCC" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={handlePrivacyPress}>
              <View style={styles.menuItemLeft}>
                <FontAwesome name="shield" size={20} color="#333333" />
                <Text style={styles.menuItemTitle}>Privacy Policy</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#CCCCCC" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Log Out Section */}
        <View style={styles.section}>
          <View style={styles.sectionContent}>
            <TouchableOpacity style={styles.logoutItem} onPress={handleLogOutPress}>
              <View style={styles.menuItemLeft}>
                <FontAwesome name="sign-out" size={20} color="#333333" />
                <Text style={styles.menuItemTitle}>Log Out</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#CCCCCC" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Request New Features Modal */}
      <Modal
        visible={isRequestFeaturesOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={handleRequestFeaturesClose}
      >
        <View style={styles.modalContainer}>
          <BlurView
            style={styles.modalOverlay}
            blurType="dark"
            blurAmount={Platform.OS === 'ios' ? 20 : 25}
            reducedTransparencyFallbackColor="#000000"
            overlayColor={Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.2)' : 'transparent'}
            downsampleFactor={Platform.OS === 'android' ? 10 : 25}
          >
            <TouchableOpacity 
              style={styles.overlayTouchable} 
              activeOpacity={1} 
              onPress={handleRequestFeaturesClose}
            />
          </BlurView>
          <View style={styles.modalContent}>
            <RequestNewFeaturesScreen onClose={handleRequestFeaturesClose} />
          </View>
        </View>
      </Modal>

      {/* Support Modal */}
      <Modal
        visible={isSupportOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={handleSupportClose}
      >
        <View style={styles.modalContainer}>
          <BlurView
            style={styles.modalOverlay}
            blurType="dark"
            blurAmount={Platform.OS === 'ios' ? 20 : 25}
            reducedTransparencyFallbackColor="#000000"
            overlayColor={Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.2)' : 'transparent'}
            downsampleFactor={Platform.OS === 'android' ? 10 : 25}
          >
            <TouchableOpacity 
              style={styles.overlayTouchable} 
              activeOpacity={1} 
              onPress={handleSupportClose}
            />
          </BlurView>
          <View style={styles.modalContent}>
            <SupportScreen onClose={handleSupportClose} />
          </View>
        </View>
      </Modal>

      {/* Data Controls Modal */}
      <Modal
        visible={isDataControlsOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={handleDataControlsClose}
      >
        <View style={styles.modalContainer}>
          <BlurView
            style={styles.modalOverlay}
            blurType="dark"
            blurAmount={Platform.OS === 'ios' ? 20 : 25}
            reducedTransparencyFallbackColor="#000000"
            overlayColor={Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.2)' : 'transparent'}
            downsampleFactor={Platform.OS === 'android' ? 10 : 25}
          >
            <TouchableOpacity 
              style={styles.overlayTouchable} 
              activeOpacity={1} 
              onPress={handleDataControlsClose}
            />
          </BlurView>
          <View style={styles.modalContent}>
            <DataControlsScreen onClose={handleDataControlsClose} />
          </View>
        </View>
      </Modal>

      {/* Profile Photo Modal */}
      <Modal
        visible={isProfilePhotoModalOpen}
        animationType="fade"
        transparent={true}
        onRequestClose={handleProfilePhotoModalClose}
      >
        <View style={styles.photoModalContainer}>
          <BlurView
            style={styles.photoModalOverlay}
            blurType="dark"
            blurAmount={Platform.OS === 'ios' ? 20 : 25}
            reducedTransparencyFallbackColor="#000000"
            overlayColor={Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.3)' : 'transparent'}
          >
            <TouchableOpacity 
              style={styles.photoOverlayTouchable} 
              activeOpacity={1} 
              onPress={handleProfilePhotoModalClose}
            />
          </BlurView>
          
          <View style={styles.photoModalContent}>
            {/* Main Actions */}
            <View style={styles.photoActionsGroup}>
              <TouchableOpacity style={styles.photoActionButton} onPress={handleUploadImage}>
                <Text style={styles.photoActionText}>Upload Image</Text>
              </TouchableOpacity>
              
              <View style={styles.photoActionSeparator} />
              
              <TouchableOpacity style={styles.photoActionButton} onPress={handleRemoveImage}>
                <Text style={styles.photoActionText}>Remove Image</Text>
              </TouchableOpacity>
            </View>
            
            {/* Cancel Button */}
            <TouchableOpacity style={styles.photoCancelButton} onPress={handleProfilePhotoModalClose}>
              <Text style={styles.photoCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8A65',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHandle: {
    width: 40,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#FF8A65',
    marginLeft: 20,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: '#ffffff',
    flex: 1,
    textAlign: 'center',
    marginRight: 9, // Compensate for close button
  },
  closeButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentArea: {
    flex: 1,
    backgroundColor: '#FF8A65',
    paddingHorizontal: 15,
   
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 6,
    marginLeft: 4,
    letterSpacing: 0.5,
  },
  sectionContent: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuItemTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333333',
    marginLeft: 12,
  },
  menuItemSubtitle: {
    fontSize: 13,
    color: '#999999',
    marginTop: 2,
  },
  // Modal Styles (Shared for both modals)
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  modalOverlay: {
    flex: 1,
  },
  overlayTouchable: {
    flex: 1,
  },
  modalContent: {
    height: height * 0.65, // 65% of screen height
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  // Profile Photo Modal Styles
  photoModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  photoModalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  photoOverlayTouchable: {
    flex: 1,
  },
  photoModalContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  photoActionsGroup: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  photoActionButton: {
    paddingVertical: 18,
    alignItems: 'center',
  },
  photoActionSeparator: {
    height: 1,
    backgroundColor: '#E5E5E5',
  },
  photoActionText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  photoCancelButton: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
  },
  photoCancelText: {
    fontSize: 16,
    color: '#FF3B30',
    fontWeight: '600',
  },
});

export default SettingsScreen; 