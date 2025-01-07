import { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import PaxPrinterUtility from 'react-native-pos-pax';

export default function App() {
  const [printStatus, setPrintStatus] = useState('Not Initialized');

  const handleInitPress = () => {
    const isSuccess = PaxPrinterUtility.init();
    setPrintStatus(isSuccess ? 'Initialized' : 'Error in Initialization');
    const status = PaxPrinterUtility.getStatus();
    if (status) {
      const printStatus = PaxPrinterUtility.printStr({ text: 'Hello World' });
      setTimeout(() => {
        setPrintStatus(printStatus ? 'Printer Working' : 'Issue in Printing');
      }, 100);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Init Pax Machine"
        onPress={() => handleInitPress()}
      ></Button>
      <Text>{printStatus}</Text>
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
