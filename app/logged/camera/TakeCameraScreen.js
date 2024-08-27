import React, { useState, useEffect, useRef } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Button,
    Pressable,
} from "react-native";
import Constants from "expo-constants";
import { Camera, CameraType } from "expo-camera/legacy";
import * as MediaLibrary from "expo-media-library";

// iconos
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function TakeCameraScreen() {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === "granted");
        })();
    }, []);

    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                setImage(data.uri);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const savePicture = async () => {
        if (image) {
            try {
                const asset = await MediaLibrary.createAssetAsync(image);
                alert("Picture saved! ðŸŽ‰");
                setImage(null);
                console.log("saved successfully");
            } catch (error) {
                console.log(error);
            }
        }
    };

    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            {!image ? (
                <Camera
                    style={styles.camera}
                    type={type}
                    ref={cameraRef}
                    flashMode={flash}
                ></Camera>
            ) : (
                <Image source={{ uri: image }} style={styles.camera} />
            )}

            <View style={styles.controls}>
                {image ? (
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingHorizontal: 50,
                        }}
                    >
                        <Button
                            title="Re-take"
                            onPress={() => setImage(null)}
                            icon="retweet"
                        />
                        <Button
                            title="Save"
                            onPress={savePicture}
                            icon="check"
                        />
                    </View>
                ) : (
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            paddingHorizontal: 5,
                            gap: 20,
                      
                        }}
                    >
                        <Pressable
                        style={styles.btn}
                            onPress={() => {
                                setType(
                                    type === CameraType.back
                                        ? CameraType.front
                                        : CameraType.back
                                );
                            }}
                        >
                            <FontAwesome6
                                name="rotate-right"
                                size={24}
                                color="white"
                            />
                        </Pressable>

                        <Pressable onPress={takePicture} style={styles.btn}>
                            <AntDesign
                                name="camera"
                                size={35}
                                color={"white"}
                            />
                        </Pressable>

                        <Pressable
                        style={styles.btn}
                            onPress={() =>
                                setFlash(
                                    flash === Camera.Constants.FlashMode.off
                                        ? Camera.Constants.FlashMode.on
                                        : Camera.Constants.FlashMode.off
                                )
                            }
                            // color={
                            // }
                            backgroundColor={
                              flash === Camera.Constants.FlashMode.off
                                  ? "#003A9C"
                                  : "#00102b"
                              
                            }
                        >
                            <Entypo name="flash" size={24} color="white" />
                        </Pressable>
                    </View>

                    // <Button title="Tomar foto" onPress={takePicture} icon="camera" />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#000",
        padding: 8,
    },
    controls: {
        flex: 0.5,
        display: "flex",
        alignItems: "center",
    },
    button: {
        height: 40,
        borderRadius: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#E9730F",
        marginLeft: 10,
    },
    camera: {
        flex: 5,
        borderRadius: 20,
    },
    topControls: {
        flex: 1,
    },
    btn: {
        backgroundColor: "#003A9C",
        borderRadius: 50,
        width: 60,
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: 'relative',
        bottom: '10%',
    },
});
