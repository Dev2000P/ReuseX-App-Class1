import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AllProducts from "../screens/AllProducts";
import NewProduct from "../screens/NewProduct";

const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=> {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'AllProducts') {
              iconName = focused
                ? 'cart'
                : 'cart-outline';
            } else if (route.name === 'NewProduct') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="All Products" component={AllProducts} options={{headerShown:false}}/>
        <Tab.Screen name="New Product" component={NewProduct} options={{headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigator;