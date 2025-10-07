import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";

import Card from "../../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { setCategorySelected } from "../../store/slices/shopSlice";
import { useGetCategoriesQuery } from "../../services/ShopApi";

const CategoriesScreen = ({ navigation }) => {
  const { data: categories, isLoading, error } = useGetCategoriesQuery();

  const dispatch = useDispatch();

  const handleSelectCategory = (category) => {
    dispatch(setCategorySelected(category));
    navigation.navigate("Productos");
  };

  const renderCategoryItem = ({ item }) => {
    return (
      <Pressable onPress={() => handleSelectCategory(item.title)}>
        <Card style={styles.cardCustom}>
          <Text style={styles.title}>{item.title}</Text>
          <Image
            width={120}
            height={50}
            source={{ uri: item.image }}
            resizeMode="contain"
          />
        </Card>
      </Pressable>
    );
  };
  return (
    <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  cardCustom: {
    //backgroundColor:"green"
  },
  title: {
    fontFamily: "Karla-Bold",
  },
});
