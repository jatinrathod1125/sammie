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
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const SideMenuScreen = ({ navigation, onClose }) => {
  const [searchText, setSearchText] = useState('');

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
    // Handle more options
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Extra top padding for Samsung Ultra devices */}
      <View style={styles.topSafeArea} />
      
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
          <FontAwesome name="ellipsis-h" size={16} color="#" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: width * 0.8, // 80% of screen width
  },
  topSafeArea: {
    height: 20, // Extra padding for Samsung Ultra devices
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
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
});

export default SideMenuScreen; 