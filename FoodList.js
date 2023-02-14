import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const foodListItem = ({ item }) => (
<View style={styles.food_list_item}>
<Image
    style={styles.food_icon}
    source={{uri: item.food_icon}}
   />
<Text style={styles.food_name}>{item.food_name}</Text>
<Text style={styles.food_ingredients}>{item.food_ingredients}</Text>
<Text style={styles.food_price}>{item.food_price}</Text>
</View>
  );

const FoodList = ({ item }) => (
<FlatList
    style={styles.food_list}
    data={item}
    renderItem={foodListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default FoodList;

const styles = StyleSheet.create({
    'food_icon': {
        'width': '4vw',
        'height': '4vw',
        'margin': 5
    },
    'food_name': {
        'fontSize': 12,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'food_ingredients': {
        'fontSize': 12,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'color': '#767474'
    },
    'food_price': {
        'color': '#030303',
        'fontSize': 12,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});