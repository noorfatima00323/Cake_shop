import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";


function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const handleLogin = () => {
    if (email == "") {
      Alert.alert("Validation Error", "Email is required.");
    } else if (!password) {
      Alert.alert("Validation Error", "Password is required");
    } else if (email === "admin" && password === "123456") {
      Alert.alert("Success", "Login successful!");
      navigation.navigate("Home");
    } else {
      Alert.alert("Error", "Invalid username or password");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.Shtitle}>Desserts Bite</Text>

        <Text style={styles.title}>Welcome Back</Text>

        <TextInput
          placeholder="Enter username"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Enter password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  Shtitle: {
    fontSize: 40,
    fontFamily: 'serif',
    fontWeight: "bold",
    marginBottom: 38,
    color: "#f11885ff",
},
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 24,
    color: "#000000ff",
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#f11885ff",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});