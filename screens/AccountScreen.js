import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../context/UserContext';

const AccountScreen = ({ navigation }) => {
  const { userData, updateUserData } = useContext(UserContext);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState(userData);

  const handleEdit = () => {
    setEditMode(true);
    setEditedData(userData);
  };

  const handleSave = () => {
    updateUserData(editedData);
    setEditMode(false);
    Alert.alert('Success', 'Account information updated successfully');
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedData(userData);
  };

  const handleInputChange = (field, value) => {
    setEditedData({
      ...editedData,
      [field]: value,
    });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#1f2937" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Account Information</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Account Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          {/* First Name */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>First Name</Text>
            {editMode ? (
              <TextInput
                style={styles.input}
                value={editedData.firstName}
                onChangeText={(value) => handleInputChange('firstName', value)}
                placeholder="Enter first name"
              />
            ) : (
              <Text style={styles.value}>{userData.firstName}</Text>
            )}
          </View>

          {/* Last Name */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Last Name</Text>
            {editMode ? (
              <TextInput
                style={styles.input}
                value={editedData.lastName}
                onChangeText={(value) => handleInputChange('lastName', value)}
                placeholder="Enter last name"
              />
            ) : (
              <Text style={styles.value}>{userData.lastName}</Text>
            )}
          </View>

          {/* Email */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Email</Text>
            {editMode ? (
              <TextInput
                style={styles.input}
                value={editedData.email}
                onChangeText={(value) => handleInputChange('email', value)}
                placeholder="Enter email"
                keyboardType="email-address"
              />
            ) : (
              <Text style={styles.value}>{userData.email}</Text>
            )}
          </View>

          {/* Phone */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Phone</Text>
            {editMode ? (
              <TextInput
                style={styles.input}
                value={editedData.phone}
                onChangeText={(value) => handleInputChange('phone', value)}
                placeholder="Enter phone number"
                keyboardType="phone-pad"
              />
            ) : (
              <Text style={styles.value}>{userData.phone}</Text>
            )}
          </View>
        </View>

        {/* Address Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Address</Text>

          {/* Address */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Street Address</Text>
            {editMode ? (
              <TextInput
                style={styles.input}
                value={editedData.address}
                onChangeText={(value) => handleInputChange('address', value)}
                placeholder="Enter street address"
              />
            ) : (
              <Text style={styles.value}>{userData.address}</Text>
            )}
          </View>

          {/* City */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>City</Text>
            {editMode ? (
              <TextInput
                style={styles.input}
                value={editedData.city}
                onChangeText={(value) => handleInputChange('city', value)}
                placeholder="Enter city"
              />
            ) : (
              <Text style={styles.value}>{userData.city}</Text>
            )}
          </View>

          {/* State */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>State</Text>
            {editMode ? (
              <TextInput
                style={styles.input}
                value={editedData.state}
                onChangeText={(value) => handleInputChange('state', value)}
                placeholder="Enter state"
              />
            ) : (
              <Text style={styles.value}>{userData.state}</Text>
            )}
          </View>

          {/* Zip Code */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Zip Code</Text>
            {editMode ? (
              <TextInput
                style={styles.input}
                value={editedData.zipCode}
                onChangeText={(value) => handleInputChange('zipCode', value)}
                placeholder="Enter zip code"
                keyboardType="numeric"
              />
            ) : (
              <Text style={styles.value}>{userData.zipCode}</Text>
            )}
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          {editMode ? (
            <>
              <TouchableOpacity
                style={[styles.button, styles.saveButton]}
                onPress={handleSave}
              >
                <Ionicons name="checkmark" size={20} color="white" />
                <Text style={styles.buttonText}>Save Changes</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={handleCancel}
              >
                <Ionicons name="close" size={20} color="#7a818d" />
                <Text style={[styles.buttonText, { color: '#7a818d' }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={[styles.button, styles.editButton]}
              onPress={handleEdit}
            >
              <Ionicons name="pencil" size={20} color="white" />
              <Text style={styles.buttonText}>Edit Information</Text>
            </TouchableOpacity>
          )}
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
    padding: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: 6,
  },
  value: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f2937',
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1f2937',
    backgroundColor: '#f9fafb',
  },
  buttonContainer: {
    paddingHorizontal: 12,
    gap: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#f11885ff',
  },
  saveButton: {
    backgroundColor: '#10b981',
  },
  cancelButton: {
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default AccountScreen;