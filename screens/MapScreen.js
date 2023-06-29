import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import DestinationCard from "../components/DestinationCard";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen
            name="Navigate"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Destination"
            component={DestinationCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
