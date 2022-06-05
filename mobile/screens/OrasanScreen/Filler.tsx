import { StyleSheet } from 'react-native';
import { View } from '@components/Themed';

export default function Filler() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    height: 155,
    marginBottom: 30,
  },
});
