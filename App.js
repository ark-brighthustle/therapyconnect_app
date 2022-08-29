import 'react-native-gesture-handler';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigations/AuthStack';
import Demo from './src/screens/Dashboard/Demo';
import AppStack from './src/navigations/AppStack';

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <AppStack />
        {/* <AuthStack /> */}
        {/* <Demo /> */}
      </TailwindProvider>
    </NavigationContainer>
  );
}
