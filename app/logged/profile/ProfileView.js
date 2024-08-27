import React, { Component } from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../../assets/styles/GlobalStyles";
import { logo } from "../../../assets/images/ImageExport";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const ProfileView = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={[GlobalStyles.container]}>
                <View style={GlobalStyles.navbar}>
                      <Image source={logo} style={[GlobalStyles.logoAuth, styles.logo]} />
                      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Perfil</Text>
                </View>
                <View style={GlobalStyles.bodyTop}>
                    <Text style={[GlobalStyles.textGeneral, styles.partition]}>
                        Datos de Usuario
                    </Text>
                    <View style={styles.content}>
                        <View style={styles.left}>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                Nombre:
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                Edad:
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                Teléfono:
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                Email:
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                Dirección:
                            </Text>
                        </View>
                        <View style={styles.right}>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                Juan Trujillo
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                17
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                3118977356
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                juanjosetm.22@gmail.com
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                Calle 69bis #105g-10
                            </Text>
                        </View>
                    </View>
                    <Text style={[GlobalStyles.textGeneral, styles.partition]}>
                        Perfil Laboral
                    </Text>
                    <Text style={styles.content}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio dolor accusantium fugit. Aut, eligendi,
                        consequuntur aspernatur incidunt, nisi sint fugiat
                        minima aperiam velit ea minus animi placeat laborum
                        earum dolorem.
                    </Text>
                    <Text style={[GlobalStyles.textGeneral, styles.partition]}>
                        Skills
                    </Text>
                    <View style={styles.content}>
                        <View style={styles.left}>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                Lenguaje:
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                Html
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                Css3
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                JavaScript
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                Php
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                Python
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                MySql
                            </Text>
                        </View>
                        <View style={styles.right}>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                Años:
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                2
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                2
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                2
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                2
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                4 meses
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.textGeneral,
                                    styles.textGeneral,
                                ]}
                            >
                                2
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    content: {
        display: "flex",
        flexDirection: "row",
        width: "85%",
        paddingVertical: 10,
        textAlign: "center",
    },
    partition: {
        borderWidth: 1,
        borderColor: "#003A9C",
        color: "#003A9C",
        padding: 4,
        width: "85%",
        textAlign: "center",
    },
    left: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        gap: 10,
    },
    right: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        gap: 10,
    },
    textGeneral: {
        fontSize: 14,
    },
    labelLink: {
        marginTop: 15,
    },
    i: {
        borderWidth: 1,
        borderRadius: "100%",
        height: "60%",
        padding: 5,
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
    },
    buttonSubmit: {
        marginTop: 15,
        marginBottom: 10,
    },
    logo: {
      marginTop: 1,
      width: 200,
      height: 200,
    }
});

export default ProfileView;
