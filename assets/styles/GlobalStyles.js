import { Text, StyleSheet, View, Dimensions } from 'react-native'
import React, { Component } from 'react'

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navbarAuth: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20,
    },
    logoAuth: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    titleAuth: {
        fontFamily: 'sans-serif',
        fontSize: 30,
    },
    contentAuth: {
        width: '100%',
        paddingHorizontal: 20,
        gap: 20,
    },
    labelInputAuth: {
        fontFamily: 'sans-serif',
        marginBottom: 4,
    },
    inputTextAuth: {
        borderWidth: 1,
        height: 30,
        borderRadius: 8,
        paddingHorizontal: 10,
        display: 'flex',
        justifyContent: 'center', 
        fontFamily: 'sans-serif'
    },
    anchorContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
    },
    submitAuthContainer: {
        marginTop: 'auto',
        paddingHorizontal: 10,
        gap: 4,
        display: 'flex',
        alignItems: 'center'
    },
    buttonAuth: {
        backgroundColor: '#003A9C',
        borderRadius: 8,
        marginBottom: 20,
        padding: 10,
        alignItems: 'center',
        width: '100%',
    },
    submitAuth: {
        color: 'white',
        fontFamily: 'sans-serif',
    }
});

export default GlobalStyles