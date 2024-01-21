import React, { useState } from 'react';
import { View, Text, Button, TouchableHighlight, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';

const ProductDetailsScreen = () => {
  const myImage = require('./image1.png');

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddToCart = () => {
    // Add to cart logic
  };

  const handleSubscribe = () => {
    // Subscribe logic
  };

  return (
    <ScrollView style={styles.container}>
      <View>
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.headerright}>
          <MaterialCommunityIcons name="signal" size={17} color="black" paddingRight={4} />
          <MaterialIcons name="wifi" size={17} color="black" paddingRight={4} />
          <Ionicons name="battery-full" size={17} color="black" />
        </View>
        
      </View>

      <View style={styles.add}>
        <Ionicons style={styles.back} name="chevron-back-sharp" size={24} color="black" /> 
      </View>
           
      
      <View style={styles.imagecontainer} >
        <Image source={myImage} style={styles.image} />
      </View>

      <View style={styles.title}>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>African Donut Mix (Puff Puff) </Text>
        <Text style={{ color: 'red' }}>£3.99</Text>
      </View>
      
      <Text style={styles.rare}>
        Rare Eat Puff Puff Mix can be made into a deep-fried dough. 
        They are made from yeast dough, shaped into balls and deep-fried until golden brown. 
        It has a doughnut-like texture but slightly o....<Text style={{ color: 'red' }}>Read more</Text>
      </Text>
      </View>

      <View style={styles.listcontainer}>
        <View style={styles.listexpand}>
        <View style={styles.underline} />

        <View style={styles.listgrid}>
          <Text style={styles.list}>
              Ingredients
            </Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
          
          <View style={styles.underline} />
       
        <View style={styles.listgrid}>
        <Text style={styles.list}>
          Nutritional Information
        </Text>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>

        <View style={styles.underline} />

        <View style={styles.listgrid}>
        <Text style={styles.list}>
          How to Prepare
        </Text>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
        <View style={styles.underline} />

        <View style={styles.listgrid}>
        <Text style={styles.list}>
          Dietary Information
        </Text>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
        <View style={styles.underline} />

        <View style={styles.listgrid}>
        <Text style={styles.list}>
          Storage Information
        </Text>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
        <View style={styles.underline} />

        <View style={styles.listgrid}>
        <Text style={styles.list}>
          Extra
        </Text>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
        </View>
      </View>

      
      {/* Reduction Icon, Text "1", Add Icon and Buttons */}
      <View style={styles.add}>
        <Ionicons style={styles.remove} name="remove" size={24} color="black" />
        <Text>1</Text>
        <Ionicons style={styles.addoutline} name="add-outline" size={24} color="black" />
      </View>

      
      <View style={styles.buttoncontainer}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="darkred"
        onPress={() => {
          // Handle button 1 press
        }}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button2}
        underlayColor="darkred"
        onPress={() => {
          // Handle button 2 press
        }}
      >
        <Text style={styles.buttonText2}>Subscribe to a Plan</Text>
      </TouchableHighlight>
    </View>

    </ScrollView>
  );
};


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingTop: 7
  },
  headerright: {
    flexDirection: 'row',
    marginRight: 20,
   
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  time: {
    marginLeft: 25,
    fontWeight: 'bold'
  },
  imagecontainer: {
    alignItems: 'center',
  },
  image: {
    height: 250,
    width: 250
  },
  listgrid: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingTop: 5,
    paddingBottom: 5
  },
  listexpand: { 
    justifyContent: 'space-between',
  },
  listcontainer: {
    paddingTop: 10
    ,
    alignItems: 'center', 
    borderBottomWidth: 1, 
    // borderBottomColor: 'gray'
  },
  underline: {
    backgroundColor: 'gray',
    opacity: 1,
    borderBottomWidth: 1,
    width: 335, // Adjust the width as needed
  },
  list: {
    padding: 2,
    fontSize: 16,
    // borderBottomColor: 'black'
  },
  
  title: {
    flexDirection: 'row', 
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  rare: {
    paddingBottom: 5,
    marginLeft: 20,
    marginRight: 20
  },
  add: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    
  },
  back: {
    backgroundColor: 'ash',
    borderWidth: 1,
    borderColor: '#888888',
    borderRadius: 4, 
    marginRight: 8 
  },
  remove: {
    backgroundColor: 'ash',
    borderWidth: 1,
    borderColor: '#888888',
    borderRadius: 4,
    marginLeft: 8 
  },
  addoutline: {
    backgroundColor: 'ash',
    borderWidth: 1,
    borderColor: '#888888',
    borderRadius: 4, 
    marginRight: 8 
  },


  buttoncontainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 30,
    paddingVertical: 12,
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  button2: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 12,
    marginVertical: 8,
    borderColor: 'red',
    borderWidth: 1,
  },
  buttonText2: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  })

export default ProductDetailsScreen;