import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';


const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={require('../assets/profile.png')} // add any image
          style={styles.profileImage}
        />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>john@example.com</Text>
      </View>

      {/* Small Cards */}
      <View style={styles.cardsRow}>
        <View style={styles.smallCard}>
          <Text style={styles.cardNumber}>12</Text>
          <Text style={styles.cardLabel}>Favorites</Text>
        </View>

        <View style={styles.smallCard}>
          <Text style={styles.cardNumber}>5</Text>
          <Text style={styles.cardLabel}>Orders</Text>
        </View>

        <View style={styles.smallCard}>
          <Text style={styles.cardNumber}>3</Text>
          <Text style={styles.cardLabel}>Support</Text>
        </View>
      </View>

      {/* Menu Options */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Account Information</Text>
          <Ionicons name="chevron-forward" size={20} color="#7a818dff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Order History</Text>
          <Ionicons name="chevron-forward" size={20} color="#7a818dff" />
        </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Notification</Text>
          <Ionicons name="chevron-forward" size={20} color="#7a818dff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Settings</Text>
          <Ionicons name="chevron-forward" size={20} color="#7a818dff" />
        </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>About App</Text>
          <Ionicons name="chevron-forward" size={20} color="#7a818dff" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, {backgroundColor:'#f7b8d8ff',}]}>
          <Text style={[styles.logtxt, ]}>Logout</Text>
          <Ionicons name="chevron-forward" size={20} color="#7a818dff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f9f9f9ff',
  },

  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 45,
    marginBottom: 10,
  },

  userName: {
    fontSize: 25,
    fontWeight: '700',
    color: '#111',
  },

  userEmail: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },

  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingHorizontal: 10,
  },

  smallCard: {
    backgroundColor: '#f7b8d8ff',
    width: '30%',
    borderWidth:1,
    borderColor:'#f11885ff',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    elevation: 3,
  },

  cardNumber: {
    fontSize: 20,
    fontWeight: '800',
    color: '#f11885ff',
  },

  cardLabel: {
    fontSize: 13,
    marginTop: 4,
    fontWeight: '600',
    color: '#374151',
  },

  menu: {
    marginTop: 10,
    paddingHorizontal: 20,
    
  },

  menuItem: {
    backgroundColor: '#fff',
    borderWidth:1.5,
    borderColor:'#f11885ff',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  },

  menuText: {
    fontSize: 16,
    color: '#3c3c3cff',
    fontWeight: '500',
  },
  logtxt:{
    fontSize: 16,
    
    color: '#f11885c8',
    fontWeight: '500',
    
  }
});
