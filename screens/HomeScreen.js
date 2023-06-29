// import { GOOGLE_API_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import { Button, SafeAreaView, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import Service from "../components/Service";
import { setOrigin } from "../slices/navSlice";

const location = {
  location: {
    lat: 41.8817753,
    lng: -87.62741899999999,
  },
  description: "Target, South State Street, Chicago, IL, USA",
};

const HomeScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  return (
    <SafeAreaView className=" bg-white p-7 h-full">
      <Text className="text-2xl font-bold">Uber</Text>
      <GooglePlacesAutocomplete
        placeholder="Search"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        minLength={2}
        styles={{
          container: {
            flex: 0,
          },
        }}
        // query={{
        //   key: GOOGLE_API_KEY,
        //   language: "en",
        // }}
        fetchDetails={true}
        returnKeyType="search"
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );
          dispatch(setDestination(null));
        }}
      />
      <Button
        title="Click me"
        onPress={() => {
          dispatch(setOrigin(location));
        }}
      />
      <View className="flex-shrink">
        <Service />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
