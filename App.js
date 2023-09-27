
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} 
      options={{headerShown:false}}
      />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}



