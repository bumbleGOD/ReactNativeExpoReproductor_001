import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Componentes
import RegisterView from "./app/auth/RegisterView";
import LoginView from "./app/auth/LoginView";
import IndexView from "./app/IndexView";

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginView"
                component={LoginView}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RegisterView"
                component={RegisterView}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="IndexView"
                component={IndexView}
                options={{ headerTitle : 'Inicio', headerTitleAlign : 'center' }}
            />
        </Stack.Navigator>
    );
}

export function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}

export default Navigation;
