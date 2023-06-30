import { GOOGLE_API_KEY } from "@env";
import { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 60, bottom: 50, left: 60 },
    });
  }, [destination, origin]);

  return (
    <MapView
      ref={mapRef}
      style={{ flex: 1 }}
      mapType="mutedStandard"
      initialRegion={{
        //chicago
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_API_KEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          identifier="destination"
          description={destination.description}
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          identifier="origin"
          description={origin.description}
        />
      )}
    </MapView>
  );
};

export default Map;
