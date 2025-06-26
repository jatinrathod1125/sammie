import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Image,
  Platform,
  Modal,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BlurView } from '@react-native-community/blur';
import SettingsScreen from './SettingsScreen';

const { width, height } = Dimensions.get('window');

const SideMenuScreen = ({ navigation, onClose }) => {
  const [searchText, setSearchText] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Sample search history/suggestions data
  const searchItems = [
    'Best office chair',
    'Best coffee maker',
    'Lawn chair',
    'Best office chair',
    'Best office chair',
    'Best office chair',
    'Best office chair',
    'Best office chair',
    'Best office chair',
    'Best office chair',
    'Best office chair',
    'Best office chair',
    'Best office chair',
  ];

  const handleItemPress = (item) => {
    console.log('Item pressed:', item);
    // Handle item selection
  };

  const handleItemLongPress = (item) => {
    console.log('Item long pressed:', item);
    setSelectedItem(item);
    setIsContextMenuOpen(true);
  };

  const handleContextMenuClose = () => {
    setIsContextMenuOpen(false);
    setSelectedItem(null);
  };

  const handleShareChat = () => {
    console.log('Share chat:', selectedItem);
    handleContextMenuClose();
  };

  const handleRename = () => {
    console.log('Rename:', selectedItem);
    handleContextMenuClose();
  };

  const handleDelete = () => {
    console.log('Delete:', selectedItem);
    handleContextMenuClose();
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    console.log('Confirmed delete:', selectedItem);
    // Actually delete the item here
    setIsDeleteModalOpen(false);
    setSelectedItem(null);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const handleProfilePress = () => {
    console.log('Profile pressed');
    // Handle profile navigation
  };

  const handleEditPress = () => {
    console.log('Edit pressed');
    // Handle edit action
  };

  const handleMorePress = () => {
    console.log('More options pressed');
    setIsSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setIsSettingsOpen(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Extra top padding for Samsung Ultra devices only - not for iOS */}
      {Platform.OS === 'android' && <View style={styles.topSafeArea} />}
      
      {/* Header with Search */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={16} color="#FF8A65" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#999999"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        
        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
          <FontAwesome name="pencil-square-o" size={23} color="#FF8A65" />
        </TouchableOpacity>
      </View>

      {/* Search Results/History List */}
      <ScrollView style={styles.contentArea} showsVerticalScrollIndicator={false}>
        {searchItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.listItem}
            onPress={() => handleItemPress(item)}
            onLongPress={() => handleItemLongPress(item)}
          >
            <Text style={styles.listItemText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Profile Section */}
      <View style={styles.profileSection}>
        <TouchableOpacity style={styles.profileContainer} onPress={handleProfilePress}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Darshil Sandesara</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.moreButton} onPress={handleMorePress}>
          <FontAwesome name="ellipsis-h" size={16} color="#FF8A65" />
        </TouchableOpacity>
      </View>

      {/* Context Menu Modal */}
      <Modal
        visible={isContextMenuOpen}
        animationType="fade"
        transparent={true}
        onRequestClose={handleContextMenuClose}
      >
        <View style={styles.contextModalContainer}>
          <BlurView
            style={styles.contextModalOverlay}
            blurType="dark"
            blurAmount={Platform.OS === 'ios' ? 15 : 20}
            reducedTransparencyFallbackColor="#000000"
            overlayColor={Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.3)' : 'transparent'}
          >
            <TouchableOpacity 
              style={styles.contextOverlayTouchable} 
              activeOpacity={1} 
              onPress={handleContextMenuClose}
            />
          </BlurView>
          
          {/* Context Menu Content */}
          <View style={styles.contextMenuContent}>
            {/* Preview Card */}
            <View style={styles.previewCard}>
              <Text style={styles.previewText}>
                {selectedItem}
              </Text>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=200&h=200&fit=crop&crop=center'
                }}
                style={styles.previewImage}
                resizeMode="cover"
              />
            </View>
            
            {/* Menu Actions */}
            <View style={styles.menuActions}>
              <TouchableOpacity style={styles.menuActionButton} onPress={handleShareChat}>
                <FontAwesome name="share" size={18} color="#007AFF" />
                <Text style={styles.menuActionText}>Share Chat</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.menuActionButton} onPress={handleRename}>
                <FontAwesome name="edit" size={18} color="#007AFF" />
                <Text style={styles.menuActionText}>Rename</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.menuActionButton} onPress={handleDelete}>
                <FontAwesome name="trash" size={18} color="#FF3B30" />
                <Text style={[styles.menuActionText, { color: '#FF3B30' }]}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        visible={isDeleteModalOpen}
        animationType="fade"
        transparent={true}
        onRequestClose={handleDeleteCancel}
      >
        <View style={styles.deleteModalContainer}>
          <BlurView
            style={styles.deleteModalOverlay}
            blurType="dark"
            blurAmount={Platform.OS === 'ios' ? 15 : 20}
            reducedTransparencyFallbackColor="#000000"
            overlayColor={Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.3)' : 'transparent'}
          >
            <TouchableOpacity 
              style={styles.deleteOverlayTouchable} 
              activeOpacity={1} 
              onPress={handleDeleteCancel}
            />
          </BlurView>
          
          <View style={styles.deleteModalContent}>
            <Text style={styles.deleteModalTitle}>Delete Chat</Text>
            <Text style={styles.deleteModalMessage}>Are you sure? This can't be undone.</Text>
            
            <View style={styles.deleteModalButtons}>
              <TouchableOpacity 
                style={[styles.deleteModalButton, styles.deleteButton]} 
                onPress={handleDeleteConfirm}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.deleteModalButton, styles.cancelButton]} 
                onPress={handleDeleteCancel}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Settings Modal */}
      <Modal
        visible={isSettingsOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={handleSettingsClose}
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
              onPress={handleSettingsClose}
            />
          </BlurView>
          <View style={styles.modalContent}>
            <SettingsScreen onClose={handleSettingsClose} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: width * 0.8, // 80% of screen width
    paddingTop: Platform.OS === 'ios' ? 0 : 0, // Let SafeAreaView handle iOS padding
  },
  topSafeArea: {
    height: 20, // Extra padding for Samsung Ultra devices only
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 12 : 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    padding: 0,
  },
  editButton: {
    padding: 8,
  },
  contentArea: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  listItemText: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '400',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    backgroundColor: '#ffffff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  profileName: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  moreButton: {
    padding: 8,
  },
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
    height: height * 0.65, // 65% of screen height - smaller like image
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  // Context Menu Styles
  contextModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  contextModalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contextOverlayTouchable: {
    flex: 1,
  },
  contextMenuContent: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    maxWidth: width * 0.85,
  },
  previewCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    width: width * 0.8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  previewText: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: '500',
  },
  previewImage: {
    width: 80,
    height: 80,
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
  },
  menuActions: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    width: width * 0.6,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  menuActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuActionText: {
    fontSize: 16,
    color: '#007AFF',
    marginLeft: 12,
    fontWeight: '500',
  },
  // Delete Modal Styles
  deleteModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  deleteModalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  deleteOverlayTouchable: {
    flex: 1,
  },
  deleteModalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    width: width * 0.85,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  deleteModalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
    textAlign: 'center',
  },
  deleteModalMessage: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  deleteModalButtons: {
    width: '100%',
    gap: 12,
  },
  deleteModalButton: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
  },
  cancelButton: {
    backgroundColor: '#007AFF',
  },
  deleteButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SideMenuScreen; 