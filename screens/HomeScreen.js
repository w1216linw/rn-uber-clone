import { SafeAreaView, Text, View } from "react-native";
import Service from "../components/Service";

const HomeScreen = () => {
  return (
    <SafeAreaView className=" bg-white p-5 h-screen">
      <Text className="text-2xl font-bold">Uber</Text>
      <View className="flex-shrink">
        <Service />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
