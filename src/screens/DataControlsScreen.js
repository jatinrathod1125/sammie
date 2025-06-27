import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  Divider,
  SafeAreaView,
  Platform,
  Modal,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
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
          <FontAwesome name="chevron-left" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Data Controls</Text>
        <View style={styles.headerSpacer} />
      </View>
 
      {/* Content */}
      <View style={styles.contentArea}>
        {/* Delete All Chats */}
        <TouchableOpacity style={styles.controlItem} onPress={handleDeleteAllChats}>
          <View style={styles.controlItemLeft}>
            <FontAwesome name="comment-o" size={24} color="#FF3B30" />
            <Text style={styles.controlItemText}>Delete All Chats</Text>
          </View>
          <FontAwesome name="chevron-right" size={20} color="#CCCCCC" />
        </TouchableOpacity>
 
        {/* Delete Account */}
        <TouchableOpacity style={styles.controlItem} onPress={handleDeleteAccount}>
          <View style={styles.controlItemLeft}>
            <FontAwesome name="exclamation-triangle" size={24} color="#FF3B30" />
            <Text style={styles.controlItemText}>Delete Account</Text>
          </View>
          <FontAwesome name="chevron-right" size={20} color="#CCCCCC" />
        </TouchableOpacity>
      </View>
 
      {/* Delete Confirmation Modal */}
      <Modal
        visible={isDeleteConfirmOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={handleDeleteConfirmClose}
      >
        <View style={styles.confirmModalContainer}>
          <View style={styles.confirmModalOverlay}>
            <TouchableOpacity
              style={styles.confirmOverlayTouchable}
              activeOpacity={1}
              onPress={handleDeleteConfirmClose}
            />
          </View>
         
          <View style={styles.confirmModalContent}>
            {/* Warning Message Card */}
            <View style={styles.warningMessageCard}>
              <Text style={styles.warningMessageText}>
                All your chats will be cleared from history. This cannot be undone.
              </Text>
              <View style={styles.divider} />
 
             
                <TouchableOpacity style={styles.confirmButtonCard} onPress={handleConfirmDelete}>
                  <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
           
            </View>
           
            {/* Confirm Button Card */}
           
           
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
        animationType="slide"
        transparent={true}
        onRequestClose={handleDeleteAccountConfirmClose}
      >
        <View style={styles.confirmModalContainer}>
          <View style={styles.confirmModalOverlay}>
            <TouchableOpacity
              style={styles.confirmOverlayTouchable}
              activeOpacity={1}
              onPress={handleDeleteAccountConfirmClose}
            />
          </View>
         
          <View style={styles.confirmModalContent}>
            {/* Warning Message Card */}
            <View style={styles.warningMessageCard}>
              <Text style={styles.warningMessageText}>
                Deleting your account is permanent and cannot be undone. All your data, including your profile, and conversations will be removed.
              </Text>
              <View style={styles.divider} />
 
              <TouchableOpacity style={styles.confirmButtonCard} onPress={handleConfirmDeleteAccount}>
                <Text style={styles.confirmButtonText}>Delete Account</Text>
              </TouchableOpacity>
            </View>
           
            {/* Delete Account Button Card */}
           
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
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FF8A65',
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#111111',
    opacity: 0.4,
    marginTop: 18,
    marginBottom: 12,
    width: '100%',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    flex: 1,
    textAlign: 'center',
  },
  headerSpacer: {
    width: 44,
  },
  contentArea: {
    flex: 1,
    backgroundColor: '#FF8A65',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  controlItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  controlItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  controlItemText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#FF3B30',
    marginLeft: 16,
  },
  // Bottom Sheet Modal Styles (matching image)
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  confirmOverlayTouchable: {
    flex: 1,
  },
  confirmModalContent: {
    backgroundColor: 'transparent',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: Platform.OS === 'ios' ? 44 : 24,
    minHeight: 250,
  },
  warningMessageCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
  },
  warningMessageText: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '400',
  },
  confirmButtonCard: {
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 4,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 18,
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
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '500',
  },
});
 
export default DataControlsScreen;