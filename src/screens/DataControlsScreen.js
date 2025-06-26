import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
  Platform,
  Modal,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BlurView } from '@react-native-community/blur';

const { width, height } = Dimensions.get('window');

const DataControlsScreen = ({ onClose }) => {
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [isDeleteAccountConfirmOpen, setIsDeleteAccountConfirmOpen] = useState(false);

  const handleBackPress = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleDeleteAllChats = () => {
    console.log('Delete All Chats pressed');
    setIsDeleteConfirmOpen(true);
  };

  const handleDeleteConfirmClose = () => {
    setIsDeleteConfirmOpen(false);
  };

  const handleConfirmDelete = () => {
    console.log('Confirmed: Delete All Chats');
    setIsDeleteConfirmOpen(false);
    // Here you would actually delete the chats
  };

  const handleCancelDelete = () => {
    console.log('Cancelled: Delete All Chats');
    setIsDeleteConfirmOpen(false);
  };

  const handleDeleteAccount = () => {
    console.log('Delete Account pressed');
    setIsDeleteAccountConfirmOpen(true);
  };

  const handleDeleteAccountConfirmClose = () => {
    setIsDeleteAccountConfirmOpen(false);
  };

  const handleConfirmDeleteAccount = () => {
    console.log('Confirmed: Delete Account');
    setIsDeleteAccountConfirmOpen(false);
    // Here you would actually delete the account
  };

  const handleCancelDeleteAccount = () => {
    console.log('Cancelled: Delete Account');
    setIsDeleteAccountConfirmOpen(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FF8A65" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <FontAwesome name="chevron-left" size={20} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Data Controls</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Content */}
      <View style={styles.contentArea}>
        {/* Delete All Chats */}
        <TouchableOpacity style={styles.controlItem} onPress={handleDeleteAllChats}>
          <View style={styles.controlItemLeft}>
            <View style={styles.iconContainer}>
              <FontAwesome name="comment-o" size={20} color="#FF8A65" />
            </View>
            <Text style={styles.controlItemText}>Delete All Chats</Text>
          </View>
          <FontAwesome name="chevron-right" size={16} color="#CCCCCC" />
        </TouchableOpacity>

        {/* Delete Account */}
        <TouchableOpacity style={styles.controlItem} onPress={handleDeleteAccount}>
          <View style={styles.controlItemLeft}>
            <View style={styles.iconContainer}>
              <FontAwesome name="exclamation-triangle" size={20} color="#FF8A65" />
            </View>
            <Text style={styles.controlItemText}>Delete Account</Text>
          </View>
          <FontAwesome name="chevron-right" size={16} color="#CCCCCC" />
        </TouchableOpacity>
      </View>

      {/* Delete Confirmation Modal */}
      <Modal
        visible={isDeleteConfirmOpen}
        animationType="fade"
        transparent={true}
        onRequestClose={handleDeleteConfirmClose}
      >
        <View style={styles.confirmModalContainer}>
          <BlurView
            style={styles.confirmModalOverlay}
            blurType="dark"
            blurAmount={Platform.OS === 'ios' ? 20 : 25}
            reducedTransparencyFallbackColor="#000000"
            overlayColor={Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.3)' : 'transparent'}
          >
            <TouchableOpacity 
              style={styles.confirmOverlayTouchable} 
              activeOpacity={1} 
              onPress={handleDeleteConfirmClose}
            />
          </BlurView>
          
          <View style={styles.confirmModalContent}>
            {/* Warning Message Card */}
            <View style={styles.warningMessageCard}>
              <Text style={styles.warningMessageText}>
                All your chats will be cleared from history. This cannot be undone.
              </Text>
            </View>
            
            {/* Confirm Button Card */}
            <TouchableOpacity style={styles.confirmButtonCard} onPress={handleConfirmDelete}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
            
            {/* Cancel Button Card */}
            <TouchableOpacity style={styles.cancelButtonCard} onPress={handleCancelDelete}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Delete Account Confirmation Modal */}
      <Modal
        visible={isDeleteAccountConfirmOpen}
        animationType="fade"
        transparent={true}
        onRequestClose={handleDeleteAccountConfirmClose}
      >
        <View style={styles.confirmModalContainer}>
          <BlurView
            style={styles.confirmModalOverlay}
            blurType="dark"
            blurAmount={Platform.OS === 'ios' ? 20 : 25}
            reducedTransparencyFallbackColor="#000000"
            overlayColor={Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.3)' : 'transparent'}
          >
            <TouchableOpacity 
              style={styles.confirmOverlayTouchable} 
              activeOpacity={1} 
              onPress={handleDeleteAccountConfirmClose}
            />
          </BlurView>
          
          <View style={styles.confirmModalContent}>
            {/* Warning Message Card */}
            <View style={styles.warningMessageCard}>
              <Text style={styles.warningMessageText}>
                Deleting your account is permanent and cannot be undone. All your data, including your profile, and conversations will be removed.
              </Text>
            </View>
            
            {/* Delete Account Button Card */}
            <TouchableOpacity style={styles.confirmButtonCard} onPress={handleConfirmDeleteAccount}>
              <Text style={styles.confirmButtonText}>Delete Account</Text>
            </TouchableOpacity>
            
            {/* Cancel Button Card */}
            <TouchableOpacity style={styles.cancelButtonCard} onPress={handleCancelDeleteAccount}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
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
  },
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
  contentArea: {
    flex: 1,
    backgroundColor: '#FF8A65',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  controlItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 12,
  },
  controlItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  controlItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  // Delete Confirmation Modal Styles
  confirmModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  confirmModalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  confirmOverlayTouchable: {
    flex: 1,
  },
  confirmModalContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  warningMessageCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
  },
  warningMessageText: {
    fontSize: 15,
    color: '#333333',
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '400',
  },
  confirmButtonCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 18,
    marginBottom: 12,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 16,
    color: '#FF3B30',
    fontWeight: '600',
  },
  cancelButtonCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
});

export default DataControlsScreen; 