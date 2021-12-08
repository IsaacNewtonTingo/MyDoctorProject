import React from "react";
import { View, Text } from "react-native";

const FinishEdit = () => {
  return (
    <View>
      <Text style={styles.text}>Enter email you used to sign up</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Text style={styles.text}>Enter password you used to sign up</Text>
      <TextInput
        placeholder="********"
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FinishEdit;
