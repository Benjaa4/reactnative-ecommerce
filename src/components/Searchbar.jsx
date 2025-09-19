import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colors } from "../global/Colors";
import { useState } from "react";

const Searchbar = ({ setKeyword }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={Colors.mediumGray}
        onChangeText={(text) => setKeyword(text)}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
});
