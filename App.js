import 'react-native-gesture-handler';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigations/AppStack';
import AuthStack from './src/navigations/AuthStack';
import HomeScreen from './src/screens/Dashboard/HomeScreen';

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <AppStack />
        {/* <HomeScreen /> */}
        {/* <AppStack /> */}
        {/* <AuthStack /> */}
      </TailwindProvider>
    </NavigationContainer>
  );
}
