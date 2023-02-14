import React from 'react'
import { Image, TextInput, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import FoodList from './FoodList'

const PlacingOrder = () => (
<ScrollView style={styles.placing_order} showsVerticalScrollIndicator={false}>
<Text style={styles.item_name}>{item.item_name}</Text>
<Text style={styles.popular_with}>{item.popular_with}</Text>
<Image
    style={styles.watch_icon}
    source={{uri: item.watch_icon}}
   />
<Text style={styles.min_count}>{item.min_count}</Text>
<Image
    style={styles.tag_icon}
    source={{uri: item.tag_icon}}
   />
<Text style={styles.about_offer}>{item.about_offer}</Text>
<Text style={styles.veg_only}>{item.veg_only}</Text>
<TextInput style={styles.Search_for_items_in_store} placeholder={'Search For Items In Store'} />
<FoodList item={item.food_list}/>
</ScrollView>
)

export default PlacingOrder;

const styles = StyleSheet.create({
    'item_name': {
        'color': '#060505',
        'fontSize': 18,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'popular_with': {
        'color': '#969292',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'watch_icon': {
        'width': '4vw',
        'height': '4vw',
        'margin': 5
    },
    'min_count': {
        'color': '#050505',
        'fontSize': 13,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'tag_icon': {
        'width': '4vw',
        'height': '4vw',
        'margin': 5
    },
    'about_offer': {
        'fontSize': 12,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'color': '#a137c8'
    },
    'veg_only': {
        'color': 'hsl(274,100%,60%)',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'Search_for_items_in_store': {
        'fontSize': 13,
        'fontWeight': '400',
        'padding': 10,
        'margin': 5,
        'backgroundColor': 'whitesmoke'
    }
});