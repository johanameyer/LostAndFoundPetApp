import { Text, View, StyleSheet } from 'react-native';

export default function FoundPets() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Found Pets Feed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#18392b',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
