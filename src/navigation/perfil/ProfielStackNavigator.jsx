import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "../../screens";
import Header from "../../components/Header";

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        header: ({ route }) => <Header title="bam" subtitle="profile" />,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
