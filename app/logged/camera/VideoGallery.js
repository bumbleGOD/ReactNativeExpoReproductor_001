import { StatusBar } from "expo-status-bar";
import {
    Button,
    FlatList,
    Modal,
    Pressable,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import { useState } from "react";
import { Image } from "expo-image";
import { Video, ResizeMode } from "expo-av";

// iconos
import AntDesign from '@expo/vector-icons/AntDesign';

export const VideoGallery = ({navigation}) => {
    const [galleryFiles, setGalleryFiles] = useState([]);
    const [currentImage, setCurrentImage] = useState("");
    const [mediaType, setMediaType] = useState("image");

    const fetchMedia = async (first, mediaType) => {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status === "granted") {
            const media = await MediaLibrary.getAssetsAsync({
                first: first + 30,
                sortBy: MediaLibrary.SortBy.creationTime,
                mediaType: MediaLibrary.MediaType.video,
            });
            setGalleryFiles(media.assets);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
            <Pressable
                onPress={() => {
                    setCurrentImage(item.uri);
                    setMediaType(item.mediaType);
                }}
            >
                <Image
                    source={{ uri: item.uri }}
                    style={{ width: 200, height: 200 }}
                />
            </Pressable>
        </View>
    );

    return (
        <View style={styles.container}>
            <Modal visible={currentImage !== ""} transparent={false}>
                <View style={{ flex: 1, backgroundColor: 0 }}>
                    <Pressable
                        style={{
                            position: "absolute",
                            top: 40,
                            zIndex: 1,
                            flex: 1,
                            alignSelf: "center",
                            borderWidth: 1,
                            borderBlockStartColor: 'red'
                        }}
                        title="Close"
                        onPress={() => setCurrentImage("")}
                    >
                        <Text
                            style={{
                                color: "black",
                                fontSize: 20,
                                padding: 10,
                                backgroundColor: "white",
                            }}
                        >
                            Close
                        </Text>
                    </Pressable>
                    {mediaType === "video" ? (
                        <Video
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                            source={{
                                uri: currentImage,
                            }}
                            useNativeControls
                            resizeMode={ResizeMode.CONTAIN}
                            isLooping
                        />
                    ) : (
                        <Image
                            source={{ uri: currentImage }}
                            style={{ width: "100%", height: "100%" }}
                        />
                    )}
                </View>
            </Modal>

            <View style={styles.scrollContainer}>
                <FlatList
                    data={galleryFiles}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    onEndReached={() => {
                        fetchMedia(galleryFiles.length, mediaType);
                    }}
                    onLayout={() => {
                        fetchMedia(galleryFiles.length, mediaType);
                    }}
                />

                <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('TakeCameraScreen')}}>
                    <AntDesign name="camera" size={35} color={'white'} />
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollContainer: {
        flex: 1,
        width: "100%",
    },
    heading: {
        color: "green",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
    },
    imageContainer: {
        flex: 1,
        margin: 1,
        aspectRatio: 1,
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {},
    btn: {
        backgroundColor: '#003A9C',
        position: 'relative',
        zIndex: 1,
        width: 50,
        height: 50,
        alignSelf: 'flex-end',
        right: 20,
        bottom: 20,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default VideoGallery;