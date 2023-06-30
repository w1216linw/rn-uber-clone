import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

//different version of uber service, only id and name of the service
const data = [
  {
    id: 1,
    name: "UberX",
    price: 1,
  },
  {
    id: 2,
    name: "UberXL",
    price: 1.25,
  },
  {
    id: 3,
    name: "UberPlus",
    price: 1.5,
  },
];

const DestinationCard = () => {
  return (
    <View className="bg-white flex-1 p-4">
      <Text className="text-center text-xl p-2">Select A Ride</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-row items-center justify-between p-2">
            <Image
              source={{ uri: "https://via.placeholder.com/200" }}
              className="h-20 w-20 rounded-full"
            />
            <Text className="text-xl p-2">{item.name}</Text>
            <Text>$10</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DestinationCard;
