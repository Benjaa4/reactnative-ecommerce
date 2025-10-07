import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import { colors } from "../../global/Colors";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { usePutProfilePictureMutation } from "../../services/ProfileApi";
import { setImage } from "../../store/slices/userSlice";
import MapView, { Marker } from "react-native-maps";

const ProfileScreen = () => {
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const user = useSelector((state) => state.userReducer.email);
  const localId = useSelector((state) => state.userReducer.localId);
  const image = useSelector((state) => state.userReducer.image);

  const [triggerPutProfilePicture, result] = usePutProfilePictureMutation();

  const dispatch = useDispatch();

  console.log("Address", address);

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
      base64: true,
    });

    if (!result.canceled) {
      const imgBase64 = `data:image/jpeg;base64,${result.assets[0].base64}`;
      dispatch(setImage(imgBase64));
      triggerPutProfilePicture({ localId: localId, image: imgBase64 });
    }
  };
};

return (
  <View style={styles.profileContainer}>
    <View style={styles.imageProfileContainer}>
      {image ? (
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          style={styles.profileImage}
        />
      ) : (
        <Text style={styles.textProfilePlaceHolder}>
          {user.charAt(0).toUpperCase()}
        </Text>
      )}
      <Pressable
        onPress={pickImage}
        style={({ pressed }) => [
          { opacity: pressed ? 0.9 : 1 },
          styles.cameraIcon,
        ]}
      ></Pressable>
    </View>
    <Text style={styles.profileData}>Email: {user} </Text>
    <View>
      <View style={styles.placeDescriptionContainer}>
        <View style={styles.addressContainer}>
          <Text>Dirección:</Text>
          <Text style={styles.address}>{address || ""}</Text>
        </View>
      </View>
    </View>
    <View style={styles.placeDescriptionContainer}>
      <View style={styles.addressContainer}>
        <Text style={styles.address}>{address || ""}</Text>
      </View>
    </View>
  </View>
);

export default ProfileScreen;

const styles = StyleSheet.create({
  profileContainer: {
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  imageProfileContainer: {
    width: 128,
    height: 128,
    borderRadius: 128,
    backgroundColor: colors.purple,
    justifyContent: "center",
    alignItems: "center",
  },
  textProfilePlaceHolder: {
    color: colors.white,
    fontSize: 48,
  },
  profileData: {
    paddingVertical: 16,
    fontSize: 16,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 128,
  },
  mapContainer: {
    width: "100%",
    height: 240,
    overflow: "hidden",
    elevation: 5,
    marginBottom: 16,
  },
  map: {
    height: 240,
  },
  mapTitle: {
    fontWeight: "700",
  },
  placeDescriptionContainer: {
    flexDirection: "row",
    gap: 16,
  },
});
