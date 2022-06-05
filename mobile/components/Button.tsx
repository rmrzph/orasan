import {
  StyleSheet,
  TouchableHighlight,
  ButtonProps as DefaultButtonProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { View, Text } from './Themed';
import Colors from '../constants/Colors';

interface ButtonProps extends DefaultButtonProps {
  variant?: string;
  style?: StyleProp<ViewStyle>;
}

export default function Button({
  title,
  variant,
  style,
  onPress,
}: ButtonProps) {
  return (
    <TouchableHighlight
      style={style}
      onPress={onPress}
      underlayColor={Colors.brand.background}
    >
      <View style={styles.container}>
        <View style={styles.buttonShadow} />

        <View
          style={[
            styles.button,
            variant === 'danger' ? styles.buttonDanger : undefined,
          ]}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brand.background,
  },
  button: {
    marginBottom: 30,
    width: 300,
    alignItems: 'center',
    backgroundColor: Colors.brand.secondary,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: {
      width: 50,
      height: 50,
    },
  },
  buttonDanger: {
    backgroundColor: Colors.brand.danger,
  },
  buttonShadow: {
    backgroundColor: 'black',
    width: 300,
    height: 60,
    position: 'absolute',
    top: 5,
    right: 5,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Baloo2_700Bold',
    fontSize: 32,
    paddingVertical: 5,
    paddingHorizontal: 30,
    color: 'white',
  },
});
