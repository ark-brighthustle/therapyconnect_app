import 'react-native-gesture-handler';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigations/AppStack';

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <AppStack />
        {/* <ChatScreen1 /> */}
      </TailwindProvider>
    </NavigationContainer>
  );
}
