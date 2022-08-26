import 'react-native-gesture-handler';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigations/AuthStack';

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <AuthStack />
      </TailwindProvider>
    </NavigationContainer>
  );
}
