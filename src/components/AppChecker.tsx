import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import { NativeModules } from 'react-native';

const { CheckAppInstalled } = NativeModules;

const AppChecker = () => {
  const [packageName, setPackageName] = useState('');

  const handleCheckApp = async () => {
    if (!packageName.trim()) {
      Alert.alert('Error', 'Please enter a package name.');
      return;
    }

    try {
      const isInstalled = await CheckAppInstalled.isAppInstalled(packageName);
      Alert.alert(
        'App Installation Check',
        isInstalled
          ? `${packageName} is installed on this device.`
          : `${packageName} is not installed on this device.`
      );
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check App Installation</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter package name"
        value={packageName}
        onChangeText={(text) => setPackageName(text)}
      />
      <Button title="Check App" onPress={handleCheckApp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default AppChecker;
