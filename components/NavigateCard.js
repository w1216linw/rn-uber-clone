import { useNavigation } from "@react-navigation/native";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";

const location = {
  location: {
    lat: 41.850691,
    lng: -87.63404899999999,
  },
  description: "Chinatown, Chicago, IL, USA",
};

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Hey, John</Text>
      <View>
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyles}
            debounce={400}
            placeholder="Enter a location"
            nearbyPlacesAPI="GooglePlacesSearch"
            fetchDetails={true}
            returnKeyType="search"
            // onPress={(data, details = null) => {
            //   dispatch(
            //     setDestination({
            //       location: details.geometry.location,
            //       description: data.description,
            //     })
            //   );

            //   navigation.navigate("Destination");
            // }}
          />
        </View>
        <Button
          title="Click me"
          onPress={() => {
            dispatch(setDestination(location));

            navigation.navigate("Destination");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    padding: 2,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#d8d8d8",
    borderRadius: 5,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
