// import About from '../screens/About';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// function HomeStack() {
//     return (
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#3E2F5B', // Background color for the header
//           },
//           headerTintColor: '#fff', // Text color for the header
//           headerTitleStyle: {
//             fontWeight: 'bold', // Font weight for the header title
//           },
//         }}
//       >
//         <Stack.Screen name="Reviews" component={About} />
//       </Stack.Navigator>
//     );
//   }

//   export default AboutStack



import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/About';
import CustomHeader from '../components/CustomHeader';

const Stack = createNativeStackNavigator();

function AboutStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3E2F5B',
          height: 60,
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="AboutUs"
        component={About}
        options={{
          headerTitle: () => <CustomHeader title='About Us' navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
}

export default AboutStack;
