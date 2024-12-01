import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen'; // проверьте путь!

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen /> {/* Добавляем WelcomeScreen */}
      <StatusBar style="auto" />
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
