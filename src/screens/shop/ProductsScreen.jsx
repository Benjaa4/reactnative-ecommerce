import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
//import products from '../../data/products.json'
import { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar";
import { useSelector, useDispatch } from "react-redux";
import { setProductSelected } from "../../store/slices/shopSlice";
import { useGetProductsByCategoryQuery } from "../../services/ShopApi";
import Searchbar from "../../components/Searchbar";

const ProductsScreen = ({ navigation, route }) => {
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [keyword, setKeyword] = useState("");

  const category = useSelector((state) => state.shopReducer.categorySelected);

  const {
    data: productsFilteredByCategory,
    isLoading,
    error,
  } = useGetProductsByCategoryQuery(category.toLowerCase());

  const dispatch = useDispatch();

  const handleSelectProduct = (product) => {
    dispatch(setProductSelected(product));
    navigation.navigate("Producto");
  };

  const renderProductsItem = ({ item }) => (
    <View>
      <Pressable onPress={() => handleSelectProduct(item)}>
        <Text style={{ fontSize: 16, fontFamily: "Prompt" }}>{item.title}</Text>
      </Pressable>
    </View>
  );

  useEffect(() => {
    if (keyword) {
      const productsFilteredByKeyword = productsFilteredByCategory.filter(
        (product) =>
          product.title.toLowerCase().includes(keyword.toLocaleLowerCase())
      );
      setProductsFiltered(productsFilteredByKeyword);
    } else {
      setProductsFiltered(productsFilteredByCategory);
    }
  }, [category, keyword, productsFilteredByCategory]);

  return (
    <View>
      <Searchbar setKeyword={setKeyword} />
      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        renderItem={renderProductsItem}
      />
    </View>
  );
};

export default ProductsScreen;
