import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Questionnaire() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diet Preferences</Text>

      <Text>• Vegetarian / Non-Vegetarian</Text>
      <Text>• Allergies</Text>
      <Text>• Calories goal</Text>

      <Button
        title="Continue"
        onPress={() => router.push('/dashboard')}
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
    fontSize: 22,
    marginBottom: 20
  }
});
