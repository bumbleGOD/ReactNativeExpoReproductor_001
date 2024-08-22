import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { logo } from "../../assets/images/ImageExport";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LoginView = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        if (!email || !password) {
            window.alert('Todos los campos son obligatorios');
            return;
        }

        try {
            const storedData = await AsyncStorage.getItem("userData");

            if (storedData !== null) {
                const storedDataArray = JSON.parse(storedData);
                const userFound = storedDataArray.some(
                    (user) => user.email === email && user.password === password
                );

                if (userFound) {
                    navigation.navigate("IndexView");
                } else {
                    window.alert("Las credenciales son incorrectas");
                }
            }
        } catch (error) {
            throw new Error('error');
        }
    }

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.navbarAuth}>
                <Image source={logo} style={GlobalStyles.logoAuth} />
                <Text style={GlobalStyles.titleAuth}>Iniciar Sesión</Text>
            </View>

            <View style={GlobalStyles.contentAuth}>
                <View>
                    <Text style={GlobalStyles.labelInputAuth}>
                        Correo electrónico:
                    </Text>
                    <TextInput
                        style={GlobalStyles.inputTextAuth}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Ingresa tu correo electrónico"
                        placeholderTextColor={"gray"}
                    />
                </View>
                <View>
                    <Text style={GlobalStyles.labelInputAuth}>Contraseña:</Text>
                    <TextInput
                        style={GlobalStyles.inputTextAuth}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        placeholder="Ingresa tu contraseña"
                        placeholderTextColor={"gray"}
                    />
                </View>
            </View>

            <View style={GlobalStyles.submitAuthContainer}>
                <View style={GlobalStyles.anchorContainer}>
                    <Text>¿Ya tienes una cuenta?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("RegisterView");
                        }}
                    >
                        <Text
                            style={{
                                color: "#003A9C",
                                textDecorationLine: "underline",
                            }}
                        >
                            Registrate aquí
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={GlobalStyles.buttonAuth}
                    onPress={handleLogin}
                >
                    <Text style={GlobalStyles.submitAuth}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginView;
