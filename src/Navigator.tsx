import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Users from './views/Users';
import Photos from './views/Photos';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Users" component={Users} options={{ title: "Users" }} />
                <Stack.Screen name="Photos" component={Photos} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;