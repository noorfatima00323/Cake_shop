import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';



const DESSERTS = [
  { id: "1", name: "Classic Chocolate Cake", price: "$25", desc: "Rich chocolate sponge with ganache" , 
    image: require('../assets/chocolate-cake.jpg')},
  { id: "2", name: "Vanilla Cupcakes", price: "$12", desc: "Light vanilla cupcakes (6 pcs)",
    image: require('../assets/vanilla.png')},
  { id: "3", name: "French Macarons", price: "$18", desc: "Assorted delicate macarons",
    image: require('../assets/macarons.png') },
  { id: "4", name: "Apple Pie", price: "$20", desc: "Warm pie with cinnamon apples",
    image: require('../assets/apple.png') },
  { id: "5", name: "Glazed Donuts", price: "$8", desc: "Freshly glazed (4 pcs)",
    image: require('../assets/donuts.png') },
  { id: "6", name: "Gelato Scoop", price: "$5", desc: "Single scoop — seasonal flavors",
    image: require('../assets/scoop.png') },
];

function DessertCard({ item, navigation }) {
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
    </TouchableOpacity>
  );
}


export default function HomeScreen({ navigation, onLogout }) {
  const [search, setSearch] = useState("");

  return (
   <View style={{ flex: 1, backgroundColor: "#f9f9f9ff" }}>
      <SafeAreaView edges={['top']} style={styles.headerSafe}>
      {/* Header with Logout Button */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>HELLO ANEEQ</Text>
        <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
      <FlatList
  data={DESSERTS}
  keyExtractor={(i) => i.id}
  numColumns={2}
  columnWrapperStyle={styles.columnWrapper}
  contentContainerStyle={styles.list}
  keyboardShouldPersistTaps="always"
  ListHeaderComponent={() => (

          <View style={styles.headerContent}>
            {/* Search Bar */}
            <TextInput
              style={styles.searchBar}
              placeholder="Search cakes..."
              value={search}
              onChangeText={setSearch}
              placeholderTextColor="#575757ff"
            />

            {/* Quote Container with right-side dessert image */}
            <View style={styles.quoteContainer}>
              <View style={styles.quoteTextWrap}>
                <Text style={styles.quote}>
                  Life is short, {'\n'}eat dessert first.
                </Text>
              </View>

              <Image
                source={require('../assets/scoop.png')}
                style={styles.quoteImage}
              />
            </View>

            <Text style={styles.sectionTitle}>Popular Desserts</Text>
          </View>
        )}
        renderItem={({ item }) => (
  <DessertCard item={item} navigation={navigation} />
)}
contentInsetAdjustmentBehavior="never"

      />
    </View>
  );
}

const styles = StyleSheet.create({
  // safe: { flex: 1, backgroundColor: "#f9f9f9ff" },
  headerSafe: {
  backgroundColor: "#f9f9f9ff",
},

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#f9f9f9ff",
    // borderBottomWidth: 1,
    borderBottomColor: "#f9f9f9ff",
  },
  headerTitle: {
    fontSize: 24,
    fontFamily:"Bold",
    color: "#f11885ff",
  },
  logoutBtn: {
    backgroundColor: "#f11885ff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
  headerContent: {
    paddingHorizontal: 16,
    paddingTop: 5,
    paddingBottom: 8,
  },
  searchBar: {
    backgroundColor: "#f7f7f784",
    borderWidth: 1.5,
    borderColor: "#f11885ff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    fontFamily:"Regular",
    marginBottom: 10,
    color: "#000",
  },
  quoteContainer: {
    height: 120,
    backgroundColor: "#f11885ff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  quoteTextWrap: {
    flex: 1,
    paddingRight: 8,
  },
  quote: {
    fontSize: 25,
    fontFamily:"SemiBold",
    textAlign: "left",
    color: "#f9f9f9e7",
    fontWeight: "500",
  },
  quoteImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    resizeMode: 'cover',
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    color: "#1f2937",
  },
  list: {
  paddingHorizontal: 8,
  paddingBottom: 8, // or 0
},

  columnWrapper: {
    justifyContent: "space-between",
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  card: {
    flex: 0.48,
    backgroundColor: "#fffdfdff",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 5,
    position: "relative", // allow absolute positioned children inside
  },
  thumb: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: "contain",
  },
  cardBody: { marginBottom: 8 },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
    color: "#000",
  },
  cardDesc: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 8,
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: "700",
    color: "#f11885ff",
  },

  /* New styles for add (plus) button */
  addBtn: {
    position: "absolute",
    right: 12,
    bottom: 20,
    width: 25,
    height: 25,
    borderRadius: 18,
    backgroundColor: "#f11885ff",
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
    fontWeight: "700",
    lineHeight: 22,
  },
});
