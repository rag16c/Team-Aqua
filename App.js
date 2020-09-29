import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView, Dimensions, View } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.mapContainer}
        initialRegion={{
          latitude: 42.047455,
          longitude: -87.680657,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showUserLocation={true}
      >
        <Marker
          title="Dempster Beach"
          description="Best Sunrise Spot Evanston"
          coordinate={{ latitude: 42.035647, longitude: -87.669332 }}
        >
          <Callout>
            <View>
              <Text>Hello World!</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.8,
  },
});
