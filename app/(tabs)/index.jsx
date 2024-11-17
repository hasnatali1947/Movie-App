import { View, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.Container}>
      <Text >Movie App</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  Container: {  
    flex: 1,
    backgroundColor: "red",
  },

});
