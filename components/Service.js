import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const service = [
  {
    id: 1,
    title: "Get a ride",
    screen: "Ride",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    title: "Order food",
    screen: "Ride",
    image: "https://via.placeholder.com/200",
  },
];

const Service = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={service}
      horizontal
      contentContainerStyle={{
        gap: 20,
      }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
          <View className=" bg-gray-100 p-5 space-y-3">
            <Image
              source={{ uri: item.image }}
              style={{ width: 100, height: 100 }}
            />
            <Text>{item.title} </Text>

            <AntDesign name="rightcircle" color="black" size={24} />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default Service;
