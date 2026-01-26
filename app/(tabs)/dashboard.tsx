import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Dashboard() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>

      <Text>Calories: 0 kcal</Text>
      <Text>Water: 0 glasses</Text>

      <Button
        title="Add Meal"
        onPress={() => router.push('/add-category')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  }
});
