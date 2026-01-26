

import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Breakfast',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Lunch',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Dinner',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Snacks',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
const ProductList = () => {
  const products = [
    { id: 1, name: "", price: "$15", img: "coffee.jpg" },
    { id: 2, name: "Green Tea", price: "$12", img: "tea.jpg" },
  ];

  return (
    <div className="grid-layout">
      {products.map((product) => (
        <Card 
          key={product.id} 
          title={product.name} 
          description={`Price: ${product.price}`} 
          imageUrl={product.img}
          buttonText="Add to Cart"
        />
      ))}
    </div>
  );
};