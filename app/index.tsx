import FullScreen from '@/components/containers/FullScreen';
import FormButton from '@/components/form/FormButton';
import { useRouter } from 'expo-router';
import { Button, StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export default function index() {
  const router = useRouter();
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  const changePage = () => {
    router.push('pageOne');
  };

  return (
    <FullScreen>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Animated.View
          style={{
            width,
            height: 100,
            backgroundColor: 'red',
          }}
        />
        <Button onPress={handlePress} title="Expandir" />
      </View>
      <FormButton title="Exemplo com Círculo" onPress={changePage}></FormButton>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  containerButton: {
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'flex-end',
  }
});