import 'react-native-gesture-handler';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigations/AppStack';
import AuthStack from './src/navigations/AuthStack';
import HomeScreen from './src/screens/Dashboard/HomeScreen';
import HealthyLife from './src/screens/Dashboard/HealthyLife';

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        {/* <HealthyLife /> */}
        <AppStack />
        {/* <HomeScreen /> */}
        {/* <AppStack /> */}
        {/* <AuthStack /> */}
      </TailwindProvider>
    </NavigationContainer>
  );
}
