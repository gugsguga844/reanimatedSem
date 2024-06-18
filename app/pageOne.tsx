import FullScreen from '@/components/containers/FullScreen';
import FormButton from '@/components/form/FormButton';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import { Svg, Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function pageOne() {
  const router = useRouter();
  const r = useSharedValue<number>(20);

  const handlePress = () => {
    r.value += 10;
  };

  // highlight-start
  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }));
  // highlight-end

  const changePage = () => {
    router.push('pageTwo');
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Svg style={styles.svg}>
        <AnimatedCircle
          cx="50%"
          cy="50%"
          fill="#FFD700"
          // highlight-next-line
          animatedProps={animatedProps}
        />
      </Svg>
      <Button onPress={handlePress} title="Click me" />
      <FormButton title="Exemplo com Círculo" onPress={changePage}></FormButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  svg: {
    height: 250,
    width: '100%',
  },
});
