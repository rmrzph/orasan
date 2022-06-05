import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import Colors from '../constants/Colors';
import Button from '../components/Button';
import { View } from '../components/Themed';
import TabBarIcon from '../components/TabBarIcon';
import { RootTabScreenProps } from '../types';
import StartTime from './OrasanScreen/StartTime';
import RunningTime from './OrasanScreen/RunningTime';
import Filler from './OrasanScreen/Filler';

export default function OrasanScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <View style={styles.container}>
      {isRunning ? (
        <>
          <StartTime />
          <RunningTime />
        </>
      ) : (
        <Filler />
      )}
      <Button
        onPress={() => {
          setIsRunning((state) => !state);
        }}
        title={isRunning ? 'uy, out na ako' : 'mag time-in'}
        variant={isRunning ? 'danger' : ''}
        style={styles.mainButton}
      />
    </View>
  );
}

OrasanScreen.options = {
  title: 'Ang Orasan',
  headerStyle: {
    backgroundColor: Colors.brand.secondary,
  },
  headerTintColor: Colors.brand.primary,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: 'Baloo2_700Bold',
    fontSize: 32,
  },
  tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
} as BottomTabNavigationOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.brand.background,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  mainButton: {
    marginBottom: 100,
  },
});
