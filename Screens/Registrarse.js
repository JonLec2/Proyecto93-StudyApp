import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Registro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Registro</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
