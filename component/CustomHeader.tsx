import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SvgUri from "react-native-svg-uri";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.Logo}
            source={require("../assets/images/bicycle.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer}>
          <Text style={styles.title}>Delvery - now</Text>
          <View style={styles.LocatinName}>
            <Text style={styles.subtitle}>San Francisco, CA</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primay} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primay} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  Logo: {
    height: 30,
    width: 30,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  LocatinName: { flexDirection: "row", alignItems: "center" },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
});
export default CustomHeader;
