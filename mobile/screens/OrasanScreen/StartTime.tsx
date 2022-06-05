import { StyleSheet } from 'react-native';
import { Text, View } from '@components/Themed';

export default function StartTime() {
  return (
    <View style={styles.container}>
      <Text style={styles.label} kenkoy>
        oras na nag simula
      </Text>
      <Text style={styles.time} kenkoy>
        8:00 AM
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginBottom: 20,
    height: 60,
  },
  label: {
    fontSize: 15,
  },
  time: {
    fontSize: 24,
    textAlign: 'center',
  },
});
