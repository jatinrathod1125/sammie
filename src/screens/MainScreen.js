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
  SafeAreaView,
  ScrollView,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SideMenuScreen from './SideMenuScreen';
 
const { width, height } = Dimensions.get('window');
 
const MainScreen = ({ navigation }) => {
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const slideAnim = useState(new Animated.Value(-width * 0.8))[0];
  
  // Demo chat messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "I am looking for an ergonomic chair that is super comfortable and make me feel nice. My budget is around $200",
      isUser: true,
      timestamp: new Date(),
    },
    {
      id: 2,
      text: "Sure! I would be happy to help! Let start by refining your search, so I can find you the best chair possible!",
      isUser: false,
      timestamp: new Date(),
    },
    {
      id: 3,
      text: "What color chair do you prefer?",
      isUser: false,
      timestamp: new Date(),
    },
    {
      id: 4,
      text: "Preferably black",
      isUser: true,
      timestamp: new Date(),
    },
    {
      id: 5,
      text: "Great! Black is a great choice and it goes with everything!",
      isUser: false,
      timestamp: new Date(),
    },
    {
      id: 6,
      text: "What do you plan to use this chair for the most, gaming, office work etc...?",
      isUser: false,
      timestamp: new Date(),
    },
    {
      id: 7,
      text: "Mainly for office work but I plan to use it for some gaming! But nothing major, just some light Minecraft.",
      isUser: true,
      timestamp: new Date(),
    },
  ]);
 
  const handleMenuPress = () => {
    if (isMenuOpen) {
      // Close menu
      Animated.timing(slideAnim, {
        toValue: -width * 0.8,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setIsMenuOpen(false);
      });
    } else {
      // Open menu
      setIsMenuOpen(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleOverlayPress = () => {
    if (isMenuOpen) {
      handleMenuPress(); // Close menu
    }
  };
 
  const handleEditPress = () => {
    // Start new chat - clear all messages
    setMessages([]);
    setMessage('');
    console.log('New chat started');
  };
 
  const handleMicPress = () => {
    // Handle voice input
    console.log('Mic pressed');
  };
 
  const handleSendPress = () => {
    if (message.trim()) {
      // Add user message
      const newMessage = {
        id: messages.length + 1,
        text: message.trim(),
        isUser: true,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, newMessage]);
      setMessage('');
      
      // Simulate AI response after 1 second
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: "Thanks for your message! I'm here to help you find what you're looking for.",
          isUser: false,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };
 
  const handleOfficeChairPress = () => {
    // Handle office chair search
    console.log('Find ergonomic chair pressed');
  };
 
  const handleCoffeeMakerPress = () => {
    // Handle coffee maker search
    console.log('Find coffee maker pressed');
  };
 
  const handleLaptopPress = () => {
    // Handle laptop search
    console.log('Find laptop pressed');
  };
 
  const handleHeadphonesPress = () => {
    // Handle headphones search
    console.log('Find headphones pressed');
  };
 
  const handleBookPress = () => {
    // Handle book search
    console.log('Find book pressed');
  };
 
    return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Extra top padding for Samsung Ultra devices */}
      <View style={styles.topSafeArea} />
     
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
          <View style={styles.hamburgerContainer}>
            <View style={[styles.hamburgerLine, styles.hamburgerLine1]} />
            <View style={[styles.hamburgerLine, styles.hamburgerLine2]} />
            <View style={[styles.hamburgerLine, styles.hamburgerLine3]} />
          </View>
        </TouchableOpacity>
        
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.headerLogo}
          resizeMode="contain"
          fadeDuration={0}
        />
        
        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
          <FontAwesome name="pencil-square-o" size={20} color="#FF8A65" />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView 
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        {/* Main Content Area - Chat Messages */}
        <ScrollView 
          style={styles.contentArea}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.messagesContainer}
        >
          {messages.map((msg) => (
            <View
              key={msg.id}
              style={[
                styles.messageBubble,
                msg.isUser ? styles.userMessage : styles.aiMessage
              ]}
            >
              <Text style={[
                styles.messageText,
                msg.isUser ? styles.userMessageText : styles.aiMessageText
              ]}>
                {msg.text}
              </Text>
            </View>
          ))}
        </ScrollView>

                {/* Action Buttons - Always Visible */}
        {!message.trim() && (
          <View style={styles.actionButtonsSection}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.actionButtonsScrollView}
              contentContainerStyle={styles.actionButtonsContainer}
            >
              <TouchableOpacity style={styles.actionButton} onPress={handleOfficeChairPress}>
                <Text style={styles.actionButtonText}>
                  Find an ergonomic chair{'\n'}for my office
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionButton} onPress={handleCoffeeMakerPress}>
                <Text style={styles.actionButtonText}>
                  Find a coffee maker{'\n'}for my home
                </Text>
              </TouchableOpacity>
    
              <TouchableOpacity style={styles.actionButton} onPress={handleLaptopPress}>
                <Text style={styles.actionButtonText}>
                  Find a gaming laptop{'\n'}for work & play
                </Text>
              </TouchableOpacity>
    
              <TouchableOpacity style={styles.actionButton} onPress={handleHeadphonesPress}>
                <Text style={styles.actionButtonText}>
                  Find noise-canceling{'\n'}headphones
                </Text>
              </TouchableOpacity>
    
              <TouchableOpacity style={styles.actionButton} onPress={handleBookPress}>
                <Text style={styles.actionButtonText}>
                  Find a good book{'\n'}for reading
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}

        {/* Bottom Section - Message Input */}
        <View style={styles.bottomSection}>
          <View style={styles.messageContainer}>
            <View style={styles.messageInputContainer}>
              <TextInput
                style={styles.messageInput}
                placeholder="Message Sammie"
                placeholderTextColor="#CCCCCC"
                value={message}
                onChangeText={setMessage}
                multiline
              />
              <TouchableOpacity style={styles.micButton} onPress={handleMicPress}>
                <FontAwesome name="microphone" size={20} color="#FF8A65" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.sendButton} onPress={handleSendPress}>
                <FontAwesome name="paper-plane" size={18} color="#FF8A65" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>

      {/* Side Menu Overlay */}
      {isMenuOpen && (
        <TouchableOpacity 
          style={styles.overlay} 
          activeOpacity={1} 
          onPress={handleOverlayPress}
        >
          <Animated.View style={[styles.sideMenu, { left: slideAnim }]}>
            <SideMenuScreen onClose={handleMenuPress} />
          </Animated.View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topSafeArea: {
    height: 20, // Extra padding for Samsung Ultra devices
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
  },
  menuButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
  },
  hamburgerContainer: {
    width: 20,
    height: 16,
    justifyContent: 'space-between',
  },
  hamburgerLine: {
    height: 2,
    backgroundColor: '#FF8A65',
    borderRadius: 1,
  },
  hamburgerLine1: {
    width: 20,
  },
  hamburgerLine2: {
    width: 20,
  },
  hamburgerLine3: {
    width: 20,
  },
  headerLogo: {
    width: 120,
    height: 40,
  },
  editButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  messagesContainer: {
    padding: 16,
    paddingBottom: 20,
  },
  messageBubble: {
    maxWidth: '80%',
    marginVertical: 4,
    padding: 12,
    borderRadius: 18,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFD3C2',
    marginLeft: '20%',
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F5F5F5',
    marginRight: '20%',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  userMessageText: {
    color: '#FFFFFF',
  },
  aiMessageText: {
    color: '#333333',
  },
  actionButtonsSection: {
    paddingHorizontal: 20,
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#ffffff',
  },
  actionButtonsScrollView: {
    marginBottom: 12,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    gap: 12,
  },
  actionButton: {
    width: 180,
    backgroundColor: '#FF8A65B2',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    textAlign: 'left',
  },
  messageContainer: {
    backgroundColor: '#ffffff',
    paddingBottom: 8,
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 13,
    minHeight: 50,
  },
  messageInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    maxHeight: 60,
    paddingTop: 0,
    paddingBottom: 0,
    marginRight: 9,
  },
  micButton: {
    padding: 8,
    marginRight: 8,
  },
  sendButton: {
    padding: 8,
  },
  homeIndicator: {
    alignSelf: 'center',
    width: 134,
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 3,
    marginBottom: 8,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: width * 0.8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
 
export default MainScreen;
 