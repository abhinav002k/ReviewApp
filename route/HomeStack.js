// import ReviewDetails from '../screens/ReviewDetails';
// import Home from '../screens/Home';


// import { MaterialIcons } from '@expo/vector-icons';

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
//         <Stack.Screen name="Reviews" component={Home} />
//         <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
//       </Stack.Navigator>
//     );
//   }

//   export default HomeStack



import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import CustomHeader from '../components/CustomHeader';

const Stack = createNativeStackNavigator();

function HomeStack({ navigation }) {
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
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <CustomHeader title='GameZone' navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: 'Review Details',
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
