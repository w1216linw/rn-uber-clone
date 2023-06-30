import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const quicklinks = [
  {
    id: 1,
    name: "Home",
    address: "123 Main St",
    location: {
      lat: 41.850691,
      lng: -87.63404899999999,
    },
    description: "Chinatown, Chicago, IL, USA",
  },
  {
    id: 2,
    name: "Work",
    address: "456 Work St",
    location: {
      lat: 41.8817753,
      lng: -87.62741899999999,
    },
    description: "Target, South State Street, Chicago, IL, USA",
  },
];

const QuickLink = ({ idx }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <FlatList
      data={quicklinks}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: 1,
            backgroundColor: "#e2e2e2",
            width: "90%",
            alignSelf: "center",
          }}
        />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity
          className="flex-row items-center gap-3 p-3"
          onPress={() => {
            if (idx === "origin") {
              dispatch(
                setOrigin({
                  location: item.location,
                  description: item.description,
                })
              );
              navigation.navigate("Ride");
            } else {
              dispatch(
                setDestination({
                  location: item.location,
                  description: item.description,
                })
              );
            }
          }}
        >
          <View
            style={{
              width: 45,
              height: 45,
              backgroundColor: "#e2e2e2",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            }}
          >
            <MaterialIcons
              name={item.name.toLowerCase()}
              size={24}
              color="white"
            />
          </View>
          <View>
            <Text className="text-lg font-bold">{item.name}</Text>
            <Text className="text-sm text-[#b0b0b0]">{item.address}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default QuickLink;
