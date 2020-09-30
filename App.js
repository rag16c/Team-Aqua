import { StatusBar } from "expo-status-bar";
import React, {Component} from "react";
import { View, StyleSheet, Text, SafeAreaView, Dimensions, Image, Modal,TouchableHighlight} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { WebView } from "react-native-webview";
import { SearchBar } from "react-native-elements";


export default function App() {

	var text = '';
  const [searchQuery, setSearchQuery] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(true); 

  const onChangeSearch = query => {
	  setSearchQuery(query);

  }
  const onSearchButtonPress = () => {
    setSearchQuery("works!");
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SearchBar
          style={styles.searchBar}
          platform="default"
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onSubmitEditing={onSearchButtonPress}
          lightTheme = {true}
        />
		<Callout>
		<View>
         <Modal
           animationType="slide"
           transparent={false}
           visible={modalVisible} 
	     >       
           <Text> "Hello" </Text>
	       <TouchableHighlight
             style={styles.openButton}
             onPress={() => {
               setModalVisible(false);
             }}
           >
	         <Text> "Hide Modal" </Text>
	   
	       </TouchableHighlight>
         </Modal>
        </View>
		</Callout>
        <MapView
          style={styles.mapContainer}
          initialRegion={{
            latitude: 42.047455,
            longitude: -87.680657,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker coordinate={{ latitude: 42.035647, longitude: -87.669332}}>
            <Callout>
              <CustomCalloutView />
            </Callout>
          </Marker>
      </MapView>
      <StatusBar style="light-content" />
	   <Text style={styles.results}>
	    {searchQuery}
	  </Text>

    </SafeAreaView>
    </View>
  );
}

class CustomCalloutView extends React.Component {
    render() {

    return (
            <View>
                <View>
                  <Text style={{
                      fontWeight: "bold",
                  }}>
					Test
                </Text>
                </View>
                <View>
                  <WebView style={{ height: 100 , width: 100, }} source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} />
                </View>
            </View>

        )
    }
}

class ModalCallout extends React.Component {
	
render() {
const [modalVisible, setModalVisible] = React.useState(false); 

return (
<View>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        
      >
</Modal>
</View>

)	
}
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
  results: {
    marginTop: '2%',
  },

});
