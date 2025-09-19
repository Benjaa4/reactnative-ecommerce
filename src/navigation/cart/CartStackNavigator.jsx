import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../../screens";
import Header from "../../components/Header";

const Stack = createNativeStackNavigator();

const CartStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        header: ({ route }) => <Header title="bam" subtitle={route.name} />,
      }}
    >
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default CartStackNavigator;
