import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { logo } from "../../assets/images/ImageExport";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const RegisterView = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    async function handleRegister() {
        if (!username || !email || !password) {
            window.alert("Todos los campos son obligatorios");
            return;
        } else if (password !== passwordRepeat) {
            window.alert("Las contraseñas no coinciden");
            return;
        }

        try {
            let localStorage = [];

            localStorage.push({ username, email, password });
            const localStorageToString = JSON.stringify(localStorage);

            if (localStorageToString) {
                await AsyncStorage.setItem("userData", localStorageToString);
                navigation.navigate("LoginView");
            } else {
                window.alert('Hubo un error a la hora del registro');
            }
        } catch (error) {
            throw new Error("Pasó algo mal");
        }
    }

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.navbarAuth}>
                <Image source={logo} style={GlobalStyles.logoAuth} />
                <Text style={GlobalStyles.titleAuth}>Registrarse</Text>
            </View>

            <View style={GlobalStyles.contentAuth}>
                <View>
                    <Text style={GlobalStyles.labelInputAuth}>
                        Nombre de usuario:
                    </Text>
                    <TextInput
                        style={GlobalStyles.inputTextAuth}
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Ingresa tu nombre de usuario"
                        placeholderTextColor={"gray"}
                    />
                </View>
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
                <View>
                    <Text style={GlobalStyles.labelInputAuth}>
                        Repetir contraseña:
                    </Text>
                    <TextInput
                        style={GlobalStyles.inputTextAuth}
                        value={passwordRepeat}
                        onChangeText={setPasswordRepeat}
                        secureTextEntry={true}
                        placeholder="Repite tu contraseña"
                        placeholderTextColor={"gray"}
                    />
                </View>
            </View>

            <View style={GlobalStyles.submitAuthContainer}>
                <View style={GlobalStyles.anchorContainer}>
                    <Text>¿Ya tienes una cuenta?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("LoginView");
                        }}
                    >
                        <Text
                            style={{
                                color: "#003A9C",
                                textDecorationLine: "underline",
                            }}
                        >
                            Inicia aquí
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={GlobalStyles.buttonAuth}
                    onPress={handleRegister}
                >
                    <Text style={GlobalStyles.submitAuth}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegisterView;
