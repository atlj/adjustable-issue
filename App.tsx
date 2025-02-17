import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const fruits = [
  'apple',
  'banana',
  'pear'
]

export default function App() {
  const [index, setIndex] = useState(0)

  return (
    <View style={styles.container}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red'
        }}
        accessible
        accessibilityRole="adjustable"
        accessibilityActions={[
          {
            name: 'increment'
          },
          {
            name: 'decrement'
          }
        ]}
        onAccessibilityAction={(event) => {
          if (event.nativeEvent.actionName === 'increment' && index < fruits.length - 1) {
            setIndex(prev => prev + 1)
            return
          }

          if (event.nativeEvent.actionName === 'decrement' && index > 0) {
            setIndex(prev => prev - 1)
            return
          }
        }}
      >
        <Text>
          {fruits[index]}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
