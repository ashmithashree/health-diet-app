import React from 'react';
import { Alert, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Breakfast',
    image:'/assets/images/Breakfast/logo.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Lunch',
    image:'/assets/images/Breakfast/logo.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Dinner',
    image:'/assets/images/Breakfast/logo.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Snacks',
    image:'/assets/images/Breakfast/logo.jpg',
  },
];

type ItemProps = {title: string; image:any };

const Item = ({title,image}: ItemProps) => (
  <TouchableOpacity 
    style={styles.item} 
    onPress={() => }
    activeOpacity={0.7} // Controls how much it fades (0 to 1)
  >
    <Image style={styles.tinyLogo}source={image}/>
    <Text style={styles.title}>{title}</Text>
 </TouchableOpacity>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} image={item.image}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#f5f5f5',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row', // Aligns image and text side-by-side
    alignItems: 'center', // Centers them vertically
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Add elevation for Android
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginLeft: 15,
  },
  tinyLogo: {
    width: 60,
    height: 60,
    borderRadius: 30, // Must be exactly half of width/height for a perfect circle
    borderWidth: 1,
    borderColor: '#eee',
  },
});

export default App;