import React from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';
import {
    Portal
} from 'react-native-paper';

const LoaderBase = () => (
    <Portal>
        <View style={styles.container}>
            <ActivityIndicator size={`large`} color="#0000ff" />
        </View>
    </Portal>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: `rgba(52, 52, 52, 0.8)`,
        height: `100%`,
        width: `100%`,
        margin: 0,
        padding: 0,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`
    }
});

export default LoaderBase;
