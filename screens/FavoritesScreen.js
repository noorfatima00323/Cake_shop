import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const FAVORITE_PRODUCTS = [
  { id: "1", name: "Classic Chocolate Cake", price: "$25", desc: "Rich chocolate sponge with ganache", 
    image: require('../assets/chocolate-cake.jpg') },
  { id: "3", name: "French Macarons", price: "$18", desc: "Assorted delicate macarons",
    image: require('../assets/macarons.png') },
  { id: "4", name: "Apple Pie", price: "$20", desc: "Warm pie with cinnamon apples",
    image: require('../assets/apple.png') },
  { id: "6", name: "Gelato Scoop", price: "$5", desc: "Single scoop — seasonal flavors",
    image: require('../assets/scoop.png') },
];

function FavoriteCard({ item, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
      style={styles.card}
    >
      <Image source={item.image} style={styles.thumb} />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardDesc}>{item.desc}</Text>
        <Text style={styles.cardPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addBtnText}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default function FavoritesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#f9f9f9ff" }}>
      <SafeAreaView edges={['top']} style={styles.headerSafe}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Favourites</Text>
        </View>
      </SafeAreaView>

      <FlatList
        data={FAVORITE_PRODUCTS}
        keyExtractor={(i) => i.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <FavoriteCard item={item} navigation={navigation} />
        )}
        contentInsetAdjustmentBehavior="never"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerSafe: {
    backgroundColor: "#f9f9f9ff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#f9f9f9ff",
    borderBottomColor: "#efefef",
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: "Bold",
    color: "#FF6F61ff",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 8,
    marginHorizontal: 16,
    // overflow: "hidden",
    position: 'relative',
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: "row",
  },
  thumb: {
    width: 120,
    height: 120,
    backgroundColor: "#f0f0f0",
  },
  cardBody: {
    padding: 10,
    flex: 1,
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: "Medium",
    color: "#333",
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 12,
    fontFamily: "Light",
    fontWeight: "400",
    color: "#666",
    marginBottom: 6,
  },
  cardPrice: {
    fontSize: 16,
    fontFamily: "Bold",
    color: "#FF6F61ff",
  },
  addBtn: {
    position: "absolute",
    right: 12,
    bottom: 12,
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: "#FF6F61ff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 4,
  },
  addBtnText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "SemiBold",
    lineHeight: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  list: {
    paddingVertical: 8,
  },
});
