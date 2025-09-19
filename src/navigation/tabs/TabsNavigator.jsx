import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStackNavigator from "../shop/ShopStackNavigator";
import CartStackNavigator from "../cart/CartStackNavigator";
import ProfileStackNavigator from "../perfil/ProfielStackNavigator";
import Icon from "react-native-vector-icons/Feather";
import { colors } from "../../global/Colors";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Shop"
        component={ShopStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="shop"
              size={24}
              color={focused ? colors.lightblue : colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="cart"
              size={24}
              color={focused ? colors.lightblue : colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="user"
              size={24}
              color={focused ? colors.lightblue : colors.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
