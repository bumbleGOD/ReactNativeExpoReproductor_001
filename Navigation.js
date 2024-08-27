import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Componentes
import RegisterView from "./app/auth/RegisterView";
import LoginView from "./app/auth/LoginView";
import IndexView from "./app/IndexView";
import ProfileView from "./app/logged/profile/ProfileView";
import TakeCameraScreen from "./app/logged/camera/TakeCameraScreen";
import CameraGallery from "./app/logged/camera/CameraGallery";

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="IndexView"
                component={IndexView}
                options={{ headerTitle : 'Inicio', headerTitleAlign : 'center', headerTintColor: 'white', headerStyle: {backgroundColor: '#003A9C'} }}
            />
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
                name="ProfileView"
                component={ProfileView}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CameraGallery"
                component={CameraGallery}
                options={{ headerTitle : 'Cámara', headerTitleAlign : 'center', headerTintColor: 'white', headerStyle: {backgroundColor: '#003A9C'} }}
            />
            <Stack.Screen
                name="TakeCameraScreen"
                component={TakeCameraScreen}
                options={{ headerTitle : 'Cámara', headerTitleAlign : 'center', headerTintColor: 'white', headerStyle: {backgroundColor: '#003A9C'} }}
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
