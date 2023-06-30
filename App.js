import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import { store } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen name="Ride" component={MapScreen} />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
