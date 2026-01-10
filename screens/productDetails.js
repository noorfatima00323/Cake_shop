import React from 'react';
import {
  View,
  Text,
  StyleSheet, 
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <SafeAreaView style={styles.safe}>
      {/* Banner with Back Arrow */}
      <View style={styles.banner}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={26} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.bannerText}>Product Detail</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Product Image */}
        <Image source={product.image} style={styles.image} />


        {/* Product Name */}
        <Text style={styles.title}>{product.name}</Text>

        {/* Product Price */}
        <Text style={styles.price}>{product.price}</Text>

        {/* Description */}
        <Text style={styles.sectionTitle}>About this product</Text>
        <Text style={styles.text}>
          This dessert is freshly baked using premium ingredients. It is made
          with care to deliver rich taste and perfect texture.
        </Text>

        <Text style={styles.sectionTitle}>Ingredients</Text>
        <Text style={styles.text}>
          Flour, fresh cream, cocoa, sugar, butter, natural flavors.
        </Text>

      </ScrollView>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.cartBtn}>
        <Text style={styles.cartText}>Add to Cart</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f9f9f9ff',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  bannerText: {
    fontSize: 18,
    fontFamily: 'SemiBold',
    color: '#1f2937',
  },
  container: {
    padding: 16,
    paddingBottom: 100,
  },
  image: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  price: {
    fontSize: 20,
    fontFamily: 'Bold',
    color: '#f11885ff',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'SemiBold',
    marginTop: 16,
    marginBottom: 6,
    color: '#1f2937',
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: 'Regular',
    fontWeight: '400',
    color: '#4b5563',
  },
  cartBtn: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#f11885ff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  cartText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SemiBold',
  },
});
