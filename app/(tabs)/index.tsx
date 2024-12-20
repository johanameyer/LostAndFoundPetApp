import { Text, View, /* @tutinfo Import <CODE>StyleSheet</CODE> to define styles. */ StyleSheet } from 'react-native';
import { Link } from 'expo-router'
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#18392B',
  },
  button:{
	fontSize: 20,
    textDecorationLine: 'underline',
    color: '#18392B',
  }
});
