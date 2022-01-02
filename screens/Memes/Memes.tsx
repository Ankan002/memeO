import React from "react";
import { View, SafeAreaView } from "react-native";
import styles from "./styles";
import MemeHeader from "../../components/MemeHeader";
import MemeContainer from "../../components/MemeContainer";
import { StatusBar } from "expo-status-bar";

const Memes = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <StatusBar style="light" backgroundColor="#fd5a5a" />
      <MemeHeader />
      <View style={styles.memeContainer}>
        <MemeContainer />
      </View>
    </SafeAreaView>
  );
};

export default Memes;
