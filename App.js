import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  Image,
  Alert, TouchableHighlight, Button, prompt,
  Pressable,
  Platform,
  Dimensions
} from "react-native";
import React from "react";


export default function App() {
  const handlePress = () => console.log("Text Pressed");

  console.log("App executed");
  console.log(Dimensions.get("screen"));

  

  return (
    <View style={styles.container}>
      {/* <Text numberOfLines={1} onPress={handlePress}>
        Hello React native
      </Text>
      {/* <Image source={require('file')} /> */}
      {/* <TouchableHighlight
        onPress={() => console.log("Dont touch me please")}
      >
        <Image
          source={{ uri: "https://i.ibb.co/Jprdg3f/banner.png" }}
          style={{ width: 350, height: 350, borderRadius: 10 }}
        />
      </TouchableHighlight>
      <StatusBar style="auto" /> */} 

<Button title="Click Me" onPress={() => Alert.alert("My Title" , "My Message", [
        {text: "Yes"},
        {text: "No"}
      
      ])} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
