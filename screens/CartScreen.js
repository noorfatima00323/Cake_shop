import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const CART_ITEMS = [
  { id: "1", name: "Classic Chocolate Cake", price: "$25", desc: "Rich chocolate sponge with ganache", 
    image: require('../assets/chocolate-cake.jpg'), qty: 1 },
  { id: "2", name: "Vanilla Cupcakes", price: "$12", desc: "Light vanilla cupcakes (6 pcs)",
    image: require('../assets/vanilla.png'), qty: 2 },
  { id: "4", name: "Apple Pie", price: "$20", desc: "Warm pie with cinnamon apples",
    image: require('../assets/apple.png'), qty: 1 },
];

function CartItem({ item }) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.thumb} />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardDesc}>{item.desc}</Text>
        <Text style={styles.cardPrice}>{item.price}</Text>
        <Text style={styles.cardQty}>Qty: {item.qty}</Text>
      </View>
      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addBtnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

// export default function CartScreen() {
export default function CartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#f9f9f9ff" }}>
      <SafeAreaView edges={['top']} style={styles.headerSafe}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Cart</Text>
        </View>
      </SafeAreaView>

      <FlatList
        data={CART_ITEMS}
        keyExtractor={(i) => i.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <CartItem item={item} />
        )}
        contentInsetAdjustmentBehavior="never"
      />

      <View style={styles.footer}>
        <Text style={styles.totalLabel}>Total: $57.00</Text>
        <TouchableOpacity style={styles.checkoutBtn} onPress={() => navigation.navigate('Checkout')}>
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerSafe: {
    backgroundColor: "#f9f9f9ff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#f9f9f9ff",
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
    overflow: "hidden",
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
    marginBottom: 4,
  },
  cardQty: {
    fontSize: 12,
    fontFamily: "Regular",
    color: "#999",
    fontWeight: "500",
  },
  list: {
    paddingVertical: 8,
    paddingBottom: 80,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#efefef",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontFamily: "Bold",
    color: "#FF6F61ff",
    textAlign: "right",
  },
  checkoutBtn: {
    marginTop: 8,
    backgroundColor: "#FF6F61ff",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  checkoutText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "SemiBold",
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
});
