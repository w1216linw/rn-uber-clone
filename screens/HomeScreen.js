import { GOOGLE_API_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import QuickLink from "../components/QuickLink";
import Service from "../components/Service";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <SafeAreaView className=" bg-white h-full">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View className="p-5">
        <Text className="text-3xl font-bold">Uber</Text>
        <GooglePlacesAutocomplete
          placeholder="Search"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          minLength={2}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              borderColor: "#b1b1b1",
              borderWidth: 1,
              borderRadius: 5,
            },
          }}
          query={{
            key: GOOGLE_API_KEY,
            language: "en",
          }}
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

            navigation.navigate("Ride");
          }}
        />
        <View className="mt-5">
          <Service />
          <QuickLink idx="origin" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
