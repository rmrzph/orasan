import { StyleSheet } from 'react-native';
import { Text, View } from '@components/Themed';

export default function RunningTime() {
  return (
    <View style={styles.container}>
      <Text style={styles.label} kenkoy>
        ika'y nag ta-trabaho na ng
      </Text>
      <Text style={styles.time} kenkoy>
        7hrs 53mins
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginBottom: 30,
    height: 75,
  },
  label: {
    fontSize: 15,
  },
  time: {
    fontSize: 32,
    textAlign: 'center',
  },
});
