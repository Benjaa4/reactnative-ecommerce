import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreen, ProductScreen, ProductsScreen } from "../../screens";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const ShopStackNavigator = () => {
  const categorySelected = useSelector(
    (state) => state.shopreducer.categorySelected
  );
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        header: ({ route }) => (
          <Header
            title="bam"
            subtitle={route.name === "Categorías" ? "Home" : categorySelected}
          />
        ),
      }}
    >
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
    </Stack.Navigator>
  );
};

export default ShopStackNavigator;
