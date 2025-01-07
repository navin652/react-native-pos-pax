import { Text, View, StyleSheet } from 'react-native';
// import { init } from 'react-native-pos-pax';

// console.log(init());

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: {3}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
