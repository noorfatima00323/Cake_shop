import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [locationServices, setLocationServices] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#1f2937" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Notifications Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Ionicons name="notifications-outline" size={24} color="#f11885ff" />
              <View style={styles.settingText}>
                <Text style={styles.settingLabel}>Push Notifications</Text>
                <Text style={styles.settingDescription}>Receive order and promotion updates</Text>
              </View>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#e5e7eb', true: '#f11885ff' }}
              thumbColor="white"
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Ionicons name="mail-outline" size={24} color="#f11885ff" />
              <View style={styles.settingText}>
                <Text style={styles.settingLabel}>Email Updates</Text>
                <Text style={styles.settingDescription}>Get promotional emails and newsletters</Text>
              </View>
            </View>
            <Switch
              value={emailUpdates}
              onValueChange={setEmailUpdates}
              trackColor={{ false: '#e5e7eb', true: '#f11885ff' }}
              thumbColor="white"
            />
          </View>
        </View>

        {/* Display Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Display</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Ionicons name="moon-outline" size={24} color="#f11885ff" />
              <View style={styles.settingText}>
                <Text style={styles.settingLabel}>Dark Mode</Text>
                <Text style={styles.settingDescription}>Use dark theme for the app</Text>
              </View>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#e5e7eb', true: '#f11885ff' }}
              thumbColor="white"
            />
          </View>
        </View>

        {/* Privacy & Security Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy & Security</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Ionicons name="location-outline" size={24} color="#f11885ff" />
              <View style={styles.settingText}>
                <Text style={styles.settingLabel}>Location Services</Text>
                <Text style={styles.settingDescription}>Allow app to access your location</Text>
              </View>
            </View>
            <Switch
              value={locationServices}
              onValueChange={setLocationServices}
              trackColor={{ false: '#e5e7eb', true: '#f11885ff' }}
              thumbColor="white"
            />
          </View>

          <TouchableOpacity style={[styles.settingItem, styles.clickableItem]}>
            <View style={styles.settingContent}>
              <Ionicons name="lock-closed-outline" size={24} color="#f11885ff" />
              <View style={styles.settingText}>
                <Text style={styles.settingLabel}>Change Password</Text>
                <Text style={styles.settingDescription}>Update your account password</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingItem, styles.clickableItem]}>
            <View style={styles.settingContent}>
              <Ionicons name="document-text-outline" size={24} color="#f11885ff" />
              <View style={styles.settingText}>
                <Text style={styles.settingLabel}>Privacy Policy</Text>
                <Text style={styles.settingDescription}>Read our privacy terms</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingItem, styles.clickableItem]}>
            <View style={styles.settingContent}>
              <Ionicons name="book-outline" size={24} color="#f11885ff" />
              <View style={styles.settingText}>
                <Text style={styles.settingLabel}>Terms of Service</Text>
                <Text style={styles.settingDescription}>View our terms and conditions</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
          </TouchableOpacity>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>

          <TouchableOpacity style={[styles.settingItem, styles.clickableItem]}>
            <View style={styles.settingContent}>
              <Ionicons name="information-circle-outline" size={24} color="#f11885ff" />
              <View style={styles.settingText}>
                <Text style={styles.settingLabel}>About Cake Shop</Text>
                <Text style={styles.settingDescription}>Version 1.0.0</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingItem, styles.clickableItem]}>
            <View style={styles.settingContent}>
              <Ionicons name="help-circle-outline" size={24} color="#f11885ff" />
              <View style={styles.settingText}>
                <Text style={styles.settingLabel}>Help & Support</Text>
                <Text style={styles.settingDescription}>Contact us for assistance</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
          </TouchableOpacity>
        </View>

        {/* Danger Zone */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.dangerButton}>
            <Ionicons name="trash-outline" size={20} color="white" />
            <Text style={styles.dangerButtonText}>Clear Cache</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Ionicons name="log-out-outline" size={20} color="white" />
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1f2937',
  },
  section: {
    backgroundColor: 'white',
    marginTop: 12,
    marginHorizontal: 12,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  clickableItem: {
    paddingVertical: 14,
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },
  settingText: {
    marginLeft: 12,
    flex: 1,
  },
  settingLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1f2937',
  },
  settingDescription: {
    fontSize: 13,
    color: '#9ca3af',
    marginTop: 2,
  },
  dangerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  dangerButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#f11885ff',
    paddingVertical: 12,
    borderRadius: 10,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default SettingsScreen;